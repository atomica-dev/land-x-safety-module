
"use client";

import { tinaField } from "tinacms/dist/react";
import { FaqItems, FaqTabsItemsFaqItemsItems } from "../tina/__generated__/types";
import { useState } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ArrowDownIcon } from "./icons";

export function FaqItems(props: {
  items: Array<FaqTabsItemsFaqItemsItems | FaqItems | null> | undefined | null
}) {
  const items = props.items;
  const [itemShownMap, setItemShownMap] = useState<Record<number, boolean>>({});

  return (<div className="w-full flex flex-col">
    {items?.map((item, index) => {
      return (<div key={item?.header} className={index > 0 ? "border-t border-gray-300" : ""}>
        <div
          // @ts-ignore
          data-tina-field={tinaField(item, "header")}
          className={`py-5 text-sm font-medium flex justify-between`}
          onClick={() => setItemShownMap({ ...itemShownMap, [index]: !itemShownMap[index] })}
        >
          <span>{item?.header}</span> <div className={itemShownMap[index] ? "rotate-180" : ""}><ArrowDownIcon  /></div>
        </div>
        {itemShownMap[index] && <div
          // @ts-ignore
          data-tina-field={tinaField(item, "content")}
          className="pt-2 pb-4 text-sm font-light text-gray-700 md-text"
        >
          <TinaMarkdown content={item?.content} />

          {item?.url && <a
            data-tina-field={tinaField(item, "url")}
            href={item.url}
          >
            <span data-tina-field={tinaField(item, "urlLabel")}>{item.urlLabel}</span>
          </a>}
        </div>}
      </div>);
    })}
  </div>);
}