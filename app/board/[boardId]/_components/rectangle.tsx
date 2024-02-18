import { colorToCss } from "@/lib/utils";
import { RectangleLayer } from "@/types/canvas";

interface RectangleProps {
  id: string;
  layer: RectangleLayer;
  selectionColor?: string;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
}

import React from "react";

export const Rectangle = ({ id, layer, selectionColor, onPointerDown }: RectangleProps) => {
  const { x, y, height, width, fill } = layer;

  return (
    <rect
      className="drop-shadow-md "
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      x={0}
      y={0}
      width={width}
      height={height}
      fill={fill ? colorToCss(fill) : "#000"}
      stroke={selectionColor || "transparent"}
      strokeWidth={1}
    />
  );
};
