import { tinaField } from "tinacms/dist/react";
import {
  PageItems,
  PageItemsAlert,
  PageItemsCustomWidget,
  PageItemsDashboard,
  PageItemsMarketWidget,
  PageItemsPoolWidget,
  PageItemsTabs,
  PageItemsTabsTabsItems,
  PageItemsTabsTabsItemsAlert,
  PageItemsTabsTabsItemsCustomWidget,
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
import { Alert } from "./alert";


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
            allow="solana; ethereum; clipboard-read; clipboard-write"
            className="w-full"
            height={"800px"}

            src={component.url ?? ""}
          /></div>;
      }
      if (["PageItemsTabsTabsItemsPoolWidget", "PageItemsPoolWidget"].includes(item.__typename)) {
        const component = item as PageItemsTabsTabsItemsPoolWidget | PageItemsPoolWidget;

        return <div className="mb-4 mx-6" key={index + item?.__typename} data-tina-field={tinaField(component, "url")}>
          <iframe
            allow="solana; ethereum; clipboard-read; clipboard-write"
            className="w-full"
            height={"800px"}

            src={component.url ?? ""}
          /></div>;
      }

      if (["PageItemsTabsTabsItemsCustomWidget", "PageItemsCustomWidget"].includes(item.__typename)) {
        const component = item as PageItemsTabsTabsItemsCustomWidget | PageItemsCustomWidget;
        const widgetProps = parseProps(component?.widgetProps);

        return <div className="mb-4 mx-6" key={index + item?.__typename} data-tina-field={tinaField(component, "widgetProps")}>
          <div className="rm-widget"
          {...widgetProps}
          />
        </div>;
      }

      if (["PageItemsTabsTabsItemsAlert", "PageItemsAlert"].includes(item.__typename)) {
        const component = item as PageItemsTabsTabsItemsAlert | PageItemsAlert;

        return (
          <div
            className="mb-4 mx-6"
            key={index + item.__typename}
            data-tina-field={tinaField(item)}
          >
            <Alert message={component.message ?? ""} />
          </div>
        );
      }

      return <></>;
    })}
  </>);
}

const parseProps = (strProps: string | undefined | null): any => {
  if (!strProps) {
    return undefined;
  }

  try {
    const props = JSON.parse(strProps);

    return props;
  } catch (e) {
    return undefined;
  }
};
