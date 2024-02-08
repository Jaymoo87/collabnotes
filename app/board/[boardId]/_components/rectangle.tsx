import { RectangleLayer } from "@/types/canvas";

interface RectangleProps {
  id: string;
  layer: RectangleLayer;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  selectionColor: string;
}

import React from "react";

export const Rectangle = ({ id, layer, onPointerDown, selectionColor }: RectangleProps) => {
  const { x, y, height, width, fill } = layer;

  return (
    <rect
      className="dropshadow-md"
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      x={0}
      y={0}
      width={width}
      height={height}
      fill="#000"
      stroke="transparent"
      strokeWidth={1}
    />
  );
};