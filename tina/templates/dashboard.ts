import { TinaField } from "tinacms";

export const Dashboard: TinaField = {
  label: "Dashboard",
  name: "dashboardItems",
  type: "object",
  list: true,
  ui: {
    itemProps: (item) => {
      return { label: `Item "${item?.title ?? "new"}"` };
    },
  },
  fields: [
    { type: "string", name: "value", label: "Value" },
    { type: "string", name: "title", label: "Title" },
  ],
};