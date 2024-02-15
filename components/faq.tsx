"use client";

import { useState } from "react";
import { FaqQuery, PageQuery } from "../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Menu } from "./menu";
import { PageHeader } from "./page-header";
import { FaqTabContent } from "./faq-tab-content";
import { FaqItems } from "./faq-items";

export function Faq(props: {
  data: FaqQuery;
  variables: object;
  query: string;
  homeData?: PageQuery;
}) {
  const { homeData } = props;
  const { data } = useTina(props);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <main className="flex w-full min-h-screen flex-col mx-auto">
      <PageHeader pageData={homeData}>
        {homeData?.page.menuItems && <Menu items={homeData.page.menuItems} />}
      </PageHeader>

      <div className="flex max-w-screen-xl mx-6 flex-col justify-between grow">
        <div className="flex flex-col lg:flex-row my-4">
          <div
            data-tina-field={tinaField(data?.faq, "title")}
            className="text-2xl font-semibold self-center lg:self-start mb-4"
          >
            {data.faq.title}
          </div>

          <div className="flex flex-col w-full">
            {data.faq.tabs?.length && <div className="w-full items-stretch flex flex-row border-b border-gray-300 mb-4 mt-8">
              {data.faq.tabs?.map((tab, index) => {
                return (
                  <div
                    key={tab?.title}
                    className={`text-sm py-4 mr-6 ${index === currentTabIndex ? "tab-header--current-tab font-medium border-b-2 border-orange-700 text-black" : "text-gray-700"}`}
                    onClick={() => setCurrentTabIndex(index)}
                    data-tina-field={tinaField(tab!, "title")}
                  > {tab?.title}</div>);
              })
              }
            </div> || ""}

            {data.faq.tabs?.[currentTabIndex] && <div className="" data-tina-field={tinaField(data.faq, "tabs", currentTabIndex)}>
              <FaqTabContent items={data.faq.tabs[currentTabIndex]?.items} />
            </div>}

            {data.faq.items && <div className="w-full" data-tina-field={tinaField(data.faq, "items")}>
              <FaqItems items={data.faq.items} />
            </div>}

          </div>
        </div>
        <div
          // @ts-ignore
          data-tina-field={tinaField(data.faq, "content")}
          className="text-gray-600 mb-2 text-base md-text w-full"
        >
          <TinaMarkdown content={data.faq.content} />
        </div>
      </div>

      {homeData && <div
        data-tina-field={tinaField(homeData.page, "footer")}
        className="mb-2 mx-6 text-gray-600 text-base md-text"
      >
        <TinaMarkdown
          content={homeData?.page?.footer}
        />
      </div>}
    </main>
  );
}
