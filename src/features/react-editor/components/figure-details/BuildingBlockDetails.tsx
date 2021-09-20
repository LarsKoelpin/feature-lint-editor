import * as React from "react";
import { BuildingBlockFigure } from "../../../domain-editor/models/editor-core/building-block-figure/BuildingBlockFigure";

type Props = {
  figure: BuildingBlockFigure;
  onClose: () => any;
};
export const BuildingBlockDetails = ({ figure, onClose }: Props) => {
  return (
    <div>
      <h2>{figure.bbName}</h2>
      {figure.id}
      <button onClick={onClose}>Close</button>
    </div>
  );
};
