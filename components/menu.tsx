"use client";

import { tinaField } from "tinacms/dist/react";
import { FaqMenuItems, PageMenuItems } from "../tina/__generated__/types";
import { usePathname } from "next/navigation";

export function Menu(props: { items: Array<PageMenuItems | FaqMenuItems | null> }) {
  const pathname = usePathname();

  return (<div className="">
    {props.items?.length && <div className="c-menu flex flex-row justify-center text-sm">
      {props.items.map((item, index) => item && <div
        key={index}
        data-tina-field={tinaField(item, "url")}
        className={`c-menu--item font-medium rounded-lg flex flex-col justify-center justify-between mx-1 py-2 px-4 ${item.url === pathname ? "c-menu--item--active text-red-800 bg-red-50" : ""}`}
      >
        <a href={item?.url ?? "#"}>{item?.title}</a>
      </div>)}

    </div>}
  </div>);
}
