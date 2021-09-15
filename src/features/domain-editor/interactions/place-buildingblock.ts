import {
  BuildingBlockFigure,
  NewBuildingBlockFigureId,
} from "../models/editor-core/BuildingBlockFigure";

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
      width: 50 * 2,
      height: 50,
      x: x,
      y: y,
      bbName: "unamed",
    });
    const updatedBbs = [...buildingBlocks(), created];
    onBuildingBlocksUpdated(updatedBbs);
  };

export type PlaceBuildingblock = ReturnType<typeof createPlaceBuildingBlock>;
