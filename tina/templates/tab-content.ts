import { TinaField } from "tinacms";
import { Dashboard } from "./dashboard";

export const TabContent: TinaField = {
  label: "Content",
  name: "items",
  type: "object",
  list: true,
  templates: [
    {
      label: "Dashboard",
      name: "dashboard",
      fields: [
        Dashboard,
        {
          type: "datetime",
          name: "updatedAt",
          label: "Last updated",
          ui: {
            timeFormat: "HH:mm:ss"
          },
        },
      ]
    },
    {
      label: "Text Block",
      name: "text",
      fields: [
        {
          type: "rich-text", name: "content", label: "Text content", templates: [
            {
              name: "RequestInsurance",
              label: "Request Insurance Button",
              fields: [{
                name: "title",
                label: "Title",
                type: "string",
              }],
            },
          ]
        },
      ],
    },
    {
      label: "Market Widget",
      name: "marketWidget",
      fields: [
        { type: "string", name: "url", label: "URL" },
      ]
    },
    {
      label: "Pool Widget",
      name: "poolWidget",
      fields: [
        { type: "string", name: "url", label: "URL" },
      ]
    },
  ],
};