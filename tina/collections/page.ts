import { Collection } from "tinacms";
import { MenuField } from "../templates/menu";
import { Tabs } from "../templates/tabs";
import { TabContent } from "../templates/tab-content";
import { CustomTinaImageField } from "../templates/custom-tina-image-field";

export const PageCollection: Collection = {
  name: "page",
  label: "Page",
  path: "content/pages",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      // navigate to the home page
      if (document._sys.filename === 'home') {
        return '/'
      }

      return `/${document._sys.filename}`
    },
  },
  fields: [
    MenuField,
    {
      type: "object",
      name: "clientLogo",
      label: "Client Logo",
      fields: [
        CustomTinaImageField,
        { type: "string", name: "alt", label: "Alt Text" },
      ],
    },
    {
      type: "string",
      name: "header",
      label: "Header",
    },
    {
      type: "string",
      name: "poweredByHeader",
      label: "Powered By Header",
    },
    {
      type: "object",
      name: "poweredByLogo",
      label: "Powered By Logo",
      fields: [
        CustomTinaImageField,
        { type: "string", name: "alt", label: "Alt Text" },
      ],
    },

    TabContent,

    Tabs,
  ],
};
