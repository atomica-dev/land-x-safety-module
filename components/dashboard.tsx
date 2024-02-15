"use client";

import { tinaField } from "tinacms/dist/react";
import { PageItemsDashboard, PageItemsTabsTabsItemsDashboard } from "../tina/__generated__/types";

export function Dashboard(props: {
  item: PageItemsTabsTabsItemsDashboard | PageItemsDashboard
}) {
  const { dashboardItems, updatedAt } = props.item;

  return (<>
    <div className="flex rounded-lg border border-gray-300 mt-8 mx-6 items-stretch flex-wrap justify-center justify-items-stretch">
      {dashboardItems?.map((item, index) =>
        <div key={item?.title} className={`flex flex-col grow shrink-0 items-center py px-4 -ml-px my-8 ${index > 0 ? "border-l border-gray-300" : ""}`}>
          <div
            data-tina-field={tinaField(item!, "value")}
            className="text-xl font-semibold mb-2 text-center"
          >{item?.value}</div>
          <div
            className="text-sm text-center"
            data-tina-field={tinaField(item!, "title")}
          >{item?.title}</div>
        </div>
      )}
    </div>
    {updatedAt &&
      <div
        className="flex w-full text-xs font-medium justify-start mx-6 my-4"
        data-tina-field={tinaField(props.item, "updatedAt")}
      >
        Last updated: {new Date(updatedAt).toLocaleString()}
      </div>
    }
  </>);
}
