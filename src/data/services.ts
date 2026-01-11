import serviceHouseWash from "@/assets/service-house-wash.jpg";
import serviceGutter from "@/assets/service-gutter.jpg";
import serviceSidewalk from "@/assets/service-sidewalk.jpg";

export const SERVICE_CARDS = [
  {
    image: serviceHouseWash,
    title: "Full House Soft Washing",
    description: "Gentle cleaning that removes dirt, mold, and mildew without damaging your siding.",
  },
  {
    image: serviceGutter,
    title: "Gutter Cleanout",
    description: "Clear debris and buildup to keep your gutters flowing freely.",
  },
  {
    image: serviceSidewalk,
    title: "Sidewalk/Driveway Cleaning",
    description: "Restore your concrete surfaces to like-new condition.",
  },
];

export const SERVICE_NAMES = SERVICE_CARDS.map((service) => service.title);

export const QUOTE_SERVICE_OPTIONS = [...SERVICE_NAMES, "Other"];

