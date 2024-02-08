import { Camera, Color } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx";

import React from "react";
import { twMerge } from "tailwind-merge";

const COLORS = ["#2667FF", "#87BFFF", "#4C5F6B", "#BCA0BC", "#55828B", "#364958", "#5F4B66"];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(e: React.PointerEvent, camera: Camera) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}

export function colorToCss(color: Color) {
  return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b
    .toString(16)
    .padStart(2, "0")}`;
}
