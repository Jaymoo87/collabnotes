"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";
import React from "react";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      <ColorButton color={{ r: 215, g: 253, b: 240 }} onClick={onChange} />
      <ColorButton color={{ r: 180, g: 214, b: 211 }} onClick={onChange} />
      <ColorButton color={{ r: 170, g: 120, b: 166 }} onClick={onChange} />
      <ColorButton color={{ r: 189, g: 44, b: 15 }} onClick={onChange} />
      <ColorButton color={{ r: 54, g: 56, b: 46 }} onClick={onChange} />
      <ColorButton color={{ r: 182, g: 255, b: 173 }} onClick={onChange} />
      <ColorButton color={{ r: 129, g: 82, b: 63 }} onClick={onChange} />
      <ColorButton color={{ r: 237, g: 184, b: 139 }} onClick={onChange} />
    </div>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

export const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div className="h-8 w-8 rounded-md border border-neutral-300" style={{ background: colorToCss(color) }} />
    </button>
  );
};
