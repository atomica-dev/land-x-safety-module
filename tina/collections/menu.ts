import { Collection } from "tinacms";

export const MenuCollection: Collection = {
  name: "menu",
  label: "Menu",
  path: "content/menu",
  format: "md",
  ui: {
    router: () => "/",
  },
  fields: [
    {
      label: "Page Menu",
      name: "menuItems",
      type: "object",
      list: true,

      templates: [
        {
          label: "Page",
          name: "page",
          fields: [
            { type: "image", name: "url", label: "URL" },
          ]
        },
        {
          label: "FAQ",
          name: "faq",
          fields: [

          ]
        }
      ]
    }
  ],
};
