import { tinaField } from "tinacms/dist/react";
import { FaqTabsItems, FaqTabsItemsFaqItems, FaqTabsItemsText } from "../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { FaqItems } from "./faq-items";


export function FaqTabContent(props: { items: Array<FaqTabsItems | null> | null | undefined }) {
  return (<>
    {props.items?.map((item, index) => {
      if (!item?.__typename) {
        return <></>;
      }

      if (["FaqTabsItemsFaqItems"].includes(item.__typename)) {
        const component = item as FaqTabsItemsFaqItems;

        return <div className="mb-4" key={index + item.__typename}
          data-tina-field={tinaField(component, "items", index)}
        ><FaqItems
            items={component.items}
          /></div>;
      }
      if (["FaqTabsItemsText"].includes(item.__typename)) {
        const component = item as FaqTabsItemsText;

        return <div
          data-tina-field={tinaField(component, "content", index)}
          className="mb-2"
          key={index + item?.__typename}
        >
          <TinaMarkdown content={component?.content}/>
        </div>;
      }

      return <></>;
    })}
  </>);
}