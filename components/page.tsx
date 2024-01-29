"use client";

import { PageQuery } from "../tina/__generated__/types";
import { useState } from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import { Menu } from "./menu";
import { PageHeader } from "./page-header";
import { TabContent } from "./tab-content";

export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
  homeData?: PageQuery;
}) {
  const { data } = useTina(props);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const homeData = (!props.homeData || props.data === props.homeData) ? data : props.homeData;

  return (
    <main className="flex min-h-screen flex-col items-center max-w-lg mx-auto">
      <PageHeader pageData={homeData}>
        {homeData?.page.menuItems && <div data-tina-field={tinaField(homeData.page, "menuItems")}><Menu items={homeData.page.menuItems} /></div>}
      </PageHeader>

      <div className="w-full flex flex-col">

        <div className="w-full items-center flex flex-col">
          {data.page.tabs?.length && <div className="w-full justify-center flex flex-row border-b border-gray-300 mb-4 mt-8 ">
            {data.page.tabs?.map((tab, index) => {
              return (
                <div
                  key={tab?.title}
                  className={`p-4 border border-gray-300 ${index === currentTabIndex ? "tab-header--current-tab bg-gray-300" : "text-gray-500"}`}
                  onClick={() => setCurrentTabIndex(index)}
                  data-tina-field={tinaField(tab!, "title")}
                > {tab?.title}</div>);
            })
            }
          </div> || ""}

          {data.page.tabs?.[currentTabIndex] && <div className="mx-4" data-tina-field={tinaField(data.page, "tabs", currentTabIndex)}>
            <TabContent items={data.page.tabs[currentTabIndex]?.items} />
          </div>}

          {data.page.items && <div className="w-full" data-tina-field={tinaField(data.page, "items")}>
            <TabContent items={data.page.items} />
          </div>}
        </div>

      </div>
    </main >
  );
}
