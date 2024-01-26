import { TinaField } from "tinacms";
import { FaqItems } from "./faq-items";

export const FaqTabContent: TinaField = {
  label: "Content",
  name: "items",
  type: "object",
  list: true,
  templates: [
    {
      label: "Faq Items",
      name: "faqItems",
      fields: [
        FaqItems
      ]
    },
    {
      label: "Text Block",
      name: "text",
      fields: [
        { type: "rich-text", name: "content", label: "Text content" },
      ],
    },
  ],
};