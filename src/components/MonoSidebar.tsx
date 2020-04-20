import React from "react";

export function MonoSidebar({
  buttons,
  frames,
  additionalStyles,
}: {
  buttons: JSX.Element[];
  frames?: boolean;
  additionalStyles?: string;
}) {
  return (
    <div
      className={`h-full ${
        frames && `border-white border`
      } flex flex-col px-4 pt-6 ${additionalStyles}`}
      style={{ minWidth: "225px" }}
    >
      {buttons}
    </div>
  );
}
