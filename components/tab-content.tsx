import { tinaField } from "tinacms/dist/react";
import {
  PageItems,
  PageItemsDashboard,
  PageItemsMarketWidget,
  PageItemsPoolWidget,
  PageItemsText,
  PageTabsItems,
  PageTabsItemsDashboard,
  PageTabsItemsMarketWidget,
  PageTabsItemsPoolWidget,
  PageTabsItemsText,
} from "../tina/__generated__/types";
import { Dashboard } from "./dashboard";
import { TinaMarkdown } from "tinacms/dist/rich-text";


export function TabContent(props: { items: Array<PageItems | PageTabsItems | null> | null | undefined }) {
  return (<>
    {props.items?.map((item, index) => {
      if (!item?.__typename) {
        return <></>;
      }

      if (["PageTabsItemsDashboard", "PageItemsDashboard"].includes(item.__typename)) {
        const component = item as PageTabsItemsDashboard | PageItemsDashboard;

        return <div className="mb-4" key={index + item.__typename}
          data-tina-field={tinaField(item)}
        ><Dashboard
            item={component}
          /></div>;
      }
      if (["PageTabsItemsText", "PageItemsText"].includes(item.__typename)) {
        const component = item as PageTabsItemsText | PageItemsText;

        return <div
          data-tina-field={tinaField(component, "content")}
          className="mb-2 mx-6 text-gray-600 text-base md-text"
          key={index + item?.__typename}
        >
          <TinaMarkdown content={component?.content}/>
        </div>;
      }
      if (["PageTabsItemsMarketWidget", "PageItemsMarketWidget"].includes(item.__typename)) {
        const component = item as PageTabsItemsMarketWidget | PageItemsMarketWidget;

        return <div className="mb-4 mx-6" key={index + item?.__typename} data-tina-field={tinaField(component, "url")}>
          <iframe
            className="w-full"
            height={"800px"}

            src={component.url ?? ""}
          /></div>;
      }
      if (["PageTabsItemsPoolWidget", "PageItemsPoolWidget"].includes(item.__typename)) {
        const component = item as PageTabsItemsPoolWidget | PageItemsPoolWidget;

        return <div className="mb-4 mx-6" key={index + item?.__typename} data-tina-field={tinaField(component, "url")}>
          <iframe
            className="w-full"
            height={"800px"}

            src={component.url ?? ""}
          /></div>;
      }

      return <></>;
    })}
  </>);
}