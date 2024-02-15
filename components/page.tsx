"use client";

import { PageQuery } from "../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Menu } from "./menu";
import { PageHeader } from "./page-header";
import { PageContent } from "./page-content";

export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
  homeData?: PageQuery;
}) {
  const { data } = useTina(props);
  const homeData = (!props.homeData || props.data === props.homeData) ? data : props.homeData;

  return (
    <main className="flex w-full min-h-screen flex-col items-center mx-auto">
      <PageHeader pageData={homeData}>
        {homeData?.page.menuItems && <Menu items={homeData.page.menuItems} />}
      </PageHeader>

      <div className="w-full flex flex-col max-w-screen-xl">

        <div className="w-full items-center flex flex-col">
          {data.page.items && <div className="w-full" data-tina-field={tinaField(data.page, "items")}>
            <PageContent items={data.page.items} />
          </div>}
        </div>

      </div>

      <div
        data-tina-field={tinaField(homeData.page, "footer")}
        className="mb-2 mx-6 text-gray-600 text-base md-text"
      >
        <TinaMarkdown
          content={homeData.page?.footer}
        />
      </div>
    </main >
  );
}
