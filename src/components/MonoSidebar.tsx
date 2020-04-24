import React from "react";
import "../index.css";

export function MonoSidebar({
  children,
  frames,
  additionalStyles,
}: {
  children: JSX.Element[];
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
      {children}
    </div>
  );
}
