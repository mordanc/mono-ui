import React from "react";
import "../index.css";

export function MonoButton({
  func,
  text,
  disable,
  rounding,
  textColor,
  additionalTextStyles,
  additionalStyles,
}: {
  func: Function;
  text: string;
  disable: boolean;
  rounding?: string;
  textColor?: string;
  additionalStyles?: string;
  additionalTextStyles?: string;
}) {
  return (
    <div
      onClick={() => {
        if (!disable) {
          func();
        }
      }}
      className={`${
        disable
          ? "hover:bg-red-700"
          : `hover:bg-greylighter ${
              textColor || "text-white"
            } transition duration-300 ease-in-out`
      } border border-black p-1 my-1 coolButton cursor-pointer text-center select-none ${rounding} ${additionalStyles}`}
    >
      <button className="focus:outline-none" disabled={disable}>
        <span className={`${additionalTextStyles}`}> {text}</span>
      </button>
    </div>
  );
}
