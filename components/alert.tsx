"use client";

import { tinaField } from "tinacms/dist/react";
import {
  PageItemsDashboard,
  PageItemsTabsTabsItemsDashboard,
} from "../tina/__generated__/types";
import { FC, useEffect, useState } from "react";

interface IAlertProps {
  message: string;
}

export const Alert: FC<IAlertProps> = (props) => {
  const { message } = props;

  return <div className="p-4 rounded-lg border border-red-300 bg-red-50 text-center text-red-700">{message}</div>;
};
