export const PHONE_NUMBER = "7178140704";

export const PHONE_DISPLAY = "717-814-0704";

export const CALL_LINK = `tel:${PHONE_NUMBER}`;

export const QUOTE_TEMPLATE =
  "Hi ATP, I want a free quote. Address: ____ Town: ____ Service: House soft wash / driveway / sidewalk. Best time: ____. Photos attached.";

export const SMS_LINK = `sms:${PHONE_NUMBER}?body=${encodeURIComponent(QUOTE_TEMPLATE)}`;

