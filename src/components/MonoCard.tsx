import React from "react";

export function MonoCard({
  children,
  center,
}: {
  children: JSX.Element[];
  center?: boolean;
}) {
  return (
    <div
      className={`bg-greylight flex flex-col px-4 ${
        center ? "items-center" : ""
      } p-2`}
    >
      {children}
    </div>
  );
}
