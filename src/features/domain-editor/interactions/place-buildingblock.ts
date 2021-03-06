import {
  BuildingBlockFigure,
  NewBuildingBlockFigureId,
} from "../models/editor-core/building-block-figure/BuildingBlockFigure";

type Listener = {
  buildingBlocks: () => BuildingBlockFigure[];
  onBuildingBlocksUpdated: (bb: BuildingBlockFigure[]) => any;
};
export const createPlaceBuildingBlock =
  ({ onBuildingBlocksUpdated, buildingBlocks }: Listener) =>
  (x: number, y: number) => {
    const created = BuildingBlockFigure({
      id: NewBuildingBlockFigureId(),
      type: "BuildingBlockFigure",
      width: 75 * 2,
      height: 75,
      x: x,
      y: y,
      bbName: "unamed",
      resizing: false,
    });
    const updatedBbs = [...buildingBlocks(), created];
    onBuildingBlocksUpdated(updatedBbs);
  };

export type PlaceBuildingblock = ReturnType<typeof createPlaceBuildingBlock>;
