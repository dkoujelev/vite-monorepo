import React from "react";
import { getNiceMessage } from "@workspace/util";

type ButtonProps = { text: string };

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button>
      {text} ({getNiceMessage()})
    </button>
  );
};
