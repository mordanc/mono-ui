import React from "react";
// @ts-ignore
import { Scrollbars } from "react-custom-scrollbars";
import { IMonoWindow } from "./types";

export function MonoWindow({
  window,
  header,
  frames,
}: {
  window: IMonoWindow;
  header?: string | JSX.Element;
  frames?: boolean;
}) {
  const { colSpan, content } = window;
  return (
    <div
      className={`col-span-${colSpan || 1} ${
        frames && `border border-white`
      } p-4`}
    >
      {header}
      <Scrollbars
        style={{ width: "100%", height: "100%" }}
        autohide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        {content}
      </Scrollbars>
    </div>
  );
}
