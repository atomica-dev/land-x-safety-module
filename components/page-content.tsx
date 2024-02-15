import { tinaField } from "tinacms/dist/react";
import {
  PageItems,
  PageItemsDashboard,
  PageItemsMarketWidget,
  PageItemsPoolWidget,
  PageItemsTabs,
  PageItemsTabsTabsItems,
  PageItemsTabsTabsItemsDashboard,
  PageItemsTabsTabsItemsMarketWidget,
  PageItemsTabsTabsItemsPoolWidget,
  PageItemsTabsTabsItemsText,
  PageItemsText,
} from "../tina/__generated__/types";
import { Dashboard } from "./dashboard";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { RequestInsurance } from "./request-insurance";
import { Tabs } from "./tabs";


export function PageContent(props: { items: Array<PageItems | PageItemsTabsTabsItems | null> | null | undefined }) {
  return (<>
    {props.items?.map((item, index) => {
      if (!item?.__typename) {
        return <></>;
      }

      if (["PageItemsTabs"].includes(item.__typename)) {
        const component = item as PageItemsTabs;

        return <div className="mb-4" key={index + item.__typename}
          data-tina-field={tinaField(item)}>
          <Tabs component={component} />
        </div>;
      }

      if (["PageItemsTabsTabsItemsDashboard", "PageItemsDashboard"].includes(item.__typename)) {
        const component = item as PageItemsTabsTabsItemsDashboard | PageItemsDashboard;

        return <div className="mb-4" key={index + item.__typename}
          data-tina-field={tinaField(item)}
        ><Dashboard
            item={component}
          /></div>;
      }
      if (["PageItemsTabsTabsItemsText", "PageItemsText"].includes(item.__typename)) {
        const component = item as PageItemsTabsTabsItemsText | PageItemsText;

        return <div
          data-tina-field={tinaField(component, "content")}
          className="mb-2 mx-6 text-gray-600 text-base md-text"
          key={index + item?.__typename}
        >
          <TinaMarkdown
            content={component?.content}
            // @ts-ignore
            components={{ RequestInsurance }}
          />
        </div>;
      }
      if (["PageItemsTabsTabsItemsMarketWidget", "PageItemsMarketWidget"].includes(item.__typename)) {
        const component = item as PageItemsTabsTabsItemsMarketWidget | PageItemsMarketWidget;

        return <div className="mb-4 mx-6" key={index + item?.__typename} data-tina-field={tinaField(component, "url")}>
          <iframe
            allow="solana; ethereum"
            className="w-full"
            height={"800px"}

            src={component.url ?? ""}
          /></div>;
      }
      if (["PageItemsTabsTabsItemsPoolWidget", "PageItemsPoolWidget"].includes(item.__typename)) {
        const component = item as PageItemsTabsTabsItemsPoolWidget | PageItemsPoolWidget;

        return <div className="mb-4 mx-6" key={index + item?.__typename} data-tina-field={tinaField(component, "url")}>
          <iframe
            allow="solana; ethereum"
            className="w-full"
            height={"800px"}

            src={component.url ?? ""}
          /></div>;
      }

      return <></>;
    })}
  </>);
}