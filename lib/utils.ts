import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const COLORS = ["#2667FF", "#87BFFF", "#4C5F6B", "#BCA0BC", "#55828B", "#364958", "#5F4B66"];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}
