import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Validation constants
const VALID_TOWNS = [
  "Lancaster",
  "Harrisburg",
  "York",
  "Lebanon",
  "Chambersburg",
  "Carlisle",
  "Camp Hill",
  "Mechanicsburg",
  "Lititz",
  "Ephrata",
  "Other nearby town",
];

const VALID_SERVICES = [
  "Full House Soft Washing",
  "Gutter Cleanout",
  "Sidewalk/Driveway Cleaning",
  "Other",
];

// Server-side validation functions
function validateName(name: string): { valid: boolean; error?: string } {
  if (!name || typeof name !== "string") {
    return { valid: false, error: "Name is required" };
  }
  const trimmed = name.trim();
  if (trimmed.length < 2) {
    return { valid: false, error: "Name must be at least 2 characters" };
  }
  if (trimmed.length > 100) {
    return { valid: false, error: "Name must be less than 100 characters" };
  }
  if (!/^[a-zA-Z\s'-]+$/.test(trimmed)) {
    return {
      valid: false,
      error: "Name can only contain letters, spaces, hyphens, and apostrophes",
    };
  }
  return { valid: true };
}

function validatePhone(phone: string): { valid: boolean; error?: string } {
  if (!phone || typeof phone !== "string") {
    return { valid: false, error: "Phone number is required" };
  }
  const trimmed = phone.trim();
  if (trimmed.length < 10) {
    return { valid: false, error: "Phone number must be at least 10 digits" };
  }
  if (trimmed.length > 20) {
    return { valid: false, error: "Phone number must be less than 20 characters" };
  }
  if (!/^[\d\s\-\(\)\+]+$/.test(trimmed)) {
    return { valid: false, error: "Please enter a valid phone number" };
  }
  return { valid: true };
}

function validateAddress(address: string): { valid: boolean; error?: string } {
  if (!address || typeof address !== "string") {
    return { valid: false, error: "Address is required" };
  }
  const trimmed = address.trim();
  if (trimmed.length < 5) {
    return { valid: false, error: "Address must be at least 5 characters" };
  }
  if (trimmed.length > 200) {
    return { valid: false, error: "Address must be less than 200 characters" };
  }
  return { valid: true };
}

function validateTown(town: string): { valid: boolean; error?: string } {
  if (!town || typeof town !== "string") {
    return { valid: false, error: "Town is required" };
  }
  if (!VALID_TOWNS.includes(town)) {
    return { valid: false, error: "Please select a valid town" };
  }
  return { valid: true };
}

function validateService(service: string): { valid: boolean; error?: string } {
  if (!service || typeof service !== "string") {
    return { valid: false, error: "Service is required" };
  }
  if (!VALID_SERVICES.includes(service)) {
    return { valid: false, error: "Please select a valid service" };
  }
  return { valid: true };
}

function validateDetails(details: string | undefined): { valid: boolean; error?: string } {
  if (details === undefined || details === null || details === "") {
    return { valid: true };
  }
  if (typeof details !== "string") {
    return { valid: false, error: "Details must be text" };
  }
  if (details.length > 1000) {
    return { valid: false, error: "Details must be less than 1000 characters" };
  }
  return { valid: true };
}

interface QuoteRequest {
  name: string;
  phone: string;
  address: string;
  town: string;
  service: string;
  details?: string;
  // Honeypot field - should always be empty for real users
  website?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ success: false, error: "Method not allowed" }),
      {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Parse request body
    const body = await req.json() as QuoteRequest;

    // Honeypot check - if the hidden field is filled, it's likely a bot
    if (body.website && body.website.trim() !== "") {
      // Silently reject bot submissions with a fake success response
      // This prevents bots from knowing they were detected
      return new Response(
        JSON.stringify({ success: true, id: "submitted" }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Server-side validation
    const errors: Record<string, string> = {};

    const nameResult = validateName(body.name);
    if (!nameResult.valid) errors.name = nameResult.error!;

    const phoneResult = validatePhone(body.phone);
    if (!phoneResult.valid) errors.phone = phoneResult.error!;

    const addressResult = validateAddress(body.address);
    if (!addressResult.valid) errors.address = addressResult.error!;

    const townResult = validateTown(body.town);
    if (!townResult.valid) errors.town = townResult.error!;

    const serviceResult = validateService(body.service);
    if (!serviceResult.valid) errors.service = serviceResult.error!;

    const detailsResult = validateDetails(body.details);
    if (!detailsResult.valid) errors.details = detailsResult.error!;

    // Return validation errors if any
    if (Object.keys(errors).length > 0) {
      return new Response(
        JSON.stringify({ success: false, errors }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Create Supabase client with service role for INSERT
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Sanitize and prepare data
    const sanitizedData = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      address: body.address.trim(),
      town: body.town,
      service: body.service,
      details: body.details?.trim() || null,
    };

    // Insert into database
    const { data, error } = await supabase
      .from("quote_requests")
      .insert(sanitizedData)
      .select()
      .single();

    if (error) {
      // Log generic error without exposing database details
      console.error("Quote submission failed");
      return new Response(
        JSON.stringify({ success: false, error: "Failed to save quote request" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Log generic error without exposing internal details
    console.error("Quote request processing error");
    return new Response(
      JSON.stringify({ success: false, error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
