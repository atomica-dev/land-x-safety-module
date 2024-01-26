import { TinaField } from "tinacms";

export const FaqItems: TinaField = {
  type: "object",
  list: true,
  name: "items",
  label: "FAQ Items",
  ui: {
    itemProps: (item) => {
      return {
        label: item?.header,
      };
    },
  },
  fields: [
    { type: "string", name: "header", label: "Header"},
    { type: "rich-text", name: "content", label: "Content" },
    { type: "string", name: "url", label: "Link url (optional)" },
    { type: "string", name: "urlLabel", label: "Link label (optional)" },
  ],
};