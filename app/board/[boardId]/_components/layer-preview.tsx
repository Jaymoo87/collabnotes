"use client";
import React, { memo } from "react";

import { useStorage } from "@/liveblocks.config";

import { LayerType } from "@/types/canvas";

import { Rectangle } from "./rectangle";
import { Circle } from "./circle";
import { Text } from "./text";
import { Note } from "./note";
import { Path } from "./path";
import { colorToCss } from "@/lib/utils";

interface LayerPreviewProps {
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
  id: string;
}

export const LayerPreview = memo(({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
  const layer = useStorage((root) => root.layers.get(id));

  if (!layer) return null;

  switch (layer.type) {
    case LayerType.Path:
      return (
        <Path
          key={id}
          points={layer.points}
          onPointerDown={(e) => onLayerPointerDown(e, id)}
          stroke={selectionColor}
          x={layer.x}
          y={layer.y}
          fill={layer.fill ? colorToCss(layer.fill) : "#000"}
        />
      );

    case LayerType.Circle:
      return <Circle id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor} />;

    case LayerType.Rectangle:
      return <Rectangle id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor} />;

    case LayerType.Text:
      return <Text id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor} />;

    case LayerType.Note:
      return <Note id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor} />;

    default:
      console.warn("Unknown layer type");
      return null;
  }
  return <div>LayerPreview</div>;
});

LayerPreview.displayName = "LayerPreview";
