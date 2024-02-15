import { useState } from "react";
import { PageItemsTabs } from "../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { PageContent } from "./page-content";


export function Tabs(props: { component: PageItemsTabs | null | undefined }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const { component } = props;

  return (!component ? <></> : <div>
    {component.tabs?.length && <div className="mx-6 justify-center flex flex-row border-b border-gray-300 mb-4 mt-8">
      {component.tabs?.map((tab, index) => {
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

    {component.tabs?.[currentTabIndex] && <div className="mx-6" data-tina-field={tinaField(component, "tabs", currentTabIndex)}>
      <PageContent items={component.tabs[currentTabIndex]?.items} />
    </div>}
  </div>);
}