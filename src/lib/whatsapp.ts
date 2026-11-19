/** The agency's WhatsApp number (international format, digits only). */
export const WHATSAPP_NUMBER = "2348151695988";

export type Enquiry = {
  name: string;
  email: string;
  business: string;
  website?: string;
  service: string;
  budget?: string;
  description: string;
};

/** Builds a wa.me link that opens WhatsApp with the enquiry pre-filled. */
export function buildWhatsAppEnquiryLink(e: Enquiry): string {
  const lines = [
    "Hello GrowLane Agency, I'd like to start a project.",
    "",
    `Name: ${e.name}`,
    `Email: ${e.email}`,
    `Business: ${e.business}`,
    e.website ? `Website: ${e.website}` : null,
    `Service: ${e.service}`,
    e.budget ? `Budget: ${e.budget}` : null,
    "",
    `Project: ${e.description}`,
  ].filter((l): l is string => l !== null);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
