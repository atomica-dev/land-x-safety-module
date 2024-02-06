"use client";

import { tinaField } from "tinacms/dist/react";
import { PageQuery } from "../tina/__generated__/types";

export function PageHeader(props: { pageData: PageQuery | undefined; children?: any; }) {
  const { page } = props.pageData ?? { page: undefined };

  if (!page) {
    return <>{props.children}</>;
  }

  return (<div className="py-2 z-10 w-full items-center justify-between text-sm flex border-b bg-black text-white">
    <div className="ml-6 flex items-center text-sm">
      {page.clientLogo?.url && <a
        href={page.clientLogo?.target || "#"}
        >
          <img
            data-tina-field={tinaField(page.clientLogo, "url")}
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={page.clientLogo?.url || ""}
            alt={page.clientLogo?.alt || ""}
            width={100}
            height={20}
          />
        </a>}
      <div
        data-tina-field={tinaField(page, "header")}
        className="mx-4"
      >
        {page.header}
      </div>
    </div>

    {props.children}

    <div className="mr-6 text-xs flex items-center text-gray-500">
      <div
        data-tina-field={tinaField(page, "poweredByHeader")}
        className="mx-4"
      >
        {page.poweredByHeader}
      </div>

      {page.poweredByLogo?.url && <img
        data-tina-field={tinaField(page.poweredByLogo, "url")}
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src={page.poweredByLogo?.url || ""}
        alt={page.poweredByLogo?.alt || ""}
        width={120}
        height={24}
      />}
    </div>
  </div>);
}