import React from "react";
import { MonoButton } from "./MonoButton";
import { MonoWindow } from "./MonoWindow";
import { MonoTopbar } from "./MonoTopbar";
// import { Scrollbars } from "react-custom-scrollbars";
import { IMonoWindow } from "./types";
import '../index.css'

export function MonoApp({
  leftSidebar,
  rightSidebar,
  topbar,
  contentPanes,
  mainContentColumns,
  frames,
}: {
  leftSidebar?: JSX.Element;
  rightSidebar?: JSX.Element;
  topbar?: JSX.Element;
  contentPanes: IMonoWindow[];
  mainContentColumns?: number;
  frames?: boolean;
}) {
  const display = contentPanes.map((pane: any) => {
    return <MonoWindow window={pane} frames={frames} />;
  });

  return (
    <div className="flex w-screen h-screen text-white bg-greydark">
      {leftSidebar}
      <div className="flex flex-col w-full">
        {topbar}
        {/* <Scrollbars
          style={{ width: "100%", height: "100%" }}
          autoHideTimeout={1000}
          autoHideDuration={200}
        > */}
          <div
            className={`w-full h-full ${
              frames && `border border-blue-500`
            } grid grid-cols-1 lg:grid-cols-${
              mainContentColumns
                ? mainContentColumns
                : contentPanes.length >= 4
                ? Math.floor(contentPanes.length / 2)
                : contentPanes.length
            } p-4 gap-4`}
          >
            {display}
          </div>
        {/* </Scrollbars> */}
      </div>

      {rightSidebar}
    </div>
  );
}
