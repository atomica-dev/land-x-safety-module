import { TinaField } from "tinacms";
import { FaqTabContent } from "./faq-tab-content";

export const FaqTabs: TinaField = {
  label: "Tabs",
  name: "tabs",
  type: "object",
  list: true,
  ui: {
    itemProps: (item) => {
      return { label: `Tab "${item?.title ?? "new"}"` };
    },
  },
  fields: [
    { type: "string", name: "title", label: "Title" },
    FaqTabContent,
  ],
};