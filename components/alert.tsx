"use client";

import React, { FC } from "react";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

interface IAlertProps {
  message: TinaMarkdownContent;
}

export const Alert: FC<IAlertProps> = (props) => {
  const { message } = props;

  return (
    <div className="p-4 rounded-lg border border-red-300 bg-red-50 text-center text-red-700 md-text">
      <TinaMarkdown content={message} />
    </div>
  );
};
