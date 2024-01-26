import { TinaField } from "tinacms";
import { TabContent } from "./tab-content";

export const Tabs: TinaField = {
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
    TabContent,
  ],
};