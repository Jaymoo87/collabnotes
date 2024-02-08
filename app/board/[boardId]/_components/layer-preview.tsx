"use client";

import { useStorage } from "@/liveblocks.config";
import { LayerType } from "@/types/canvas";
import React, { memo } from "react";
import { Rectangle } from "./rectangle";

interface LayerPreviewProps {
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor: string;
  id: string;
}

export const LayerPreview = memo(({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
  const layer = useStorage((root) => root.layers.get(id));

  if (!layer) return null;

  switch (layer.type) {
    case LayerType.Rectangle:
      return <Rectangle id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor} />;

    default:
      console.warn("Unknown layer type");
      return null;
  }

  return <div>LayerPreview</div>;
});

LayerPreview.displayName = "LayerPreview";
