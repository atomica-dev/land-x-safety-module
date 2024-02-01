import { Collection } from "tinacms";
import { MenuField } from "../templates/menu";
import { FaqItems } from "../templates/faq-items";
import { FaqTabs } from "../templates/faq-tabs";

export const FaqCollection: Collection = {
  name: "faq",
  label: "FAQ",
  path: "content/faq",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `${document._sys.filename}`
    },
  },
  fields: [
    MenuField,
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    FaqTabs,
    FaqItems,
    {
      type: "rich-text",
      name: "content",
      label: "Text content"
    },
  ],
};
