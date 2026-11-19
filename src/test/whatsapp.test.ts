import { describe, expect, it } from "vitest";
import { buildWhatsAppEnquiryLink } from "@/lib/whatsapp";

const enquiry = {
  name: "Ada Obi",
  email: "ada@example.com",
  business: "Ada Jewels",
  service: "Shopify Store Design",
  description: "I need a new jewelry store.",
};

describe("WhatsApp enquiry link", () => {
  it("sends the enquiry to 2348151695988", () => {
    expect(buildWhatsAppEnquiryLink(enquiry).startsWith("https://wa.me/2348151695988?text=")).toBe(true);
  });

  it("includes the visitor's form details in the message", () => {
    const text = decodeURIComponent(buildWhatsAppEnquiryLink(enquiry).split("?text=")[1] ?? "");
    expect(text).toContain("Name: Ada Obi");
    expect(text).toContain("Email: ada@example.com");
    expect(text).toContain("Service: Shopify Store Design");
    expect(text).toContain("Project: I need a new jewelry store.");
  });
});
