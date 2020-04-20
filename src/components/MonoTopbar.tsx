import React from "react";
import { MonoButton } from "./MonoButton";

export function MonoTopbar({
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
      className={`h-16 flex items-center ${
        frames && `border border-red-500`
      } justify-between px-4 ${additionalStyles}`}
    >
      {children}
    </div>
  );
}
