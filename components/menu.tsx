"use client";

import { tinaField } from "tinacms/dist/react";
import { FaqMenuItems, PageMenuItems } from "../tina/__generated__/types";
import { usePathname } from "next/navigation";

export function Menu(props: { items: Array<PageMenuItems | FaqMenuItems | null> }) {
  const pathname = usePathname();

  return (<div className="grow self-end">
    {props.items?.length && <div className="c-menu w-full flex flex-row justify-center text-sm text-center">
      {props.items.map((item, index) => item && <div
        key={index}
        data-tina-field={tinaField(item, "url")}
        className={`c-menu--item font-medium flex flex-col justify-center items-center border basis-full border-black py-2 px-4 ${item.url === pathname ? "c-menu--item--active text-black bg-green-500" : "text-black bg-white"}`}
      >
        <a href={item?.url ?? "#"}>{item?.title}</a>
      </div>)}

    </div>}
  </div>);
}
