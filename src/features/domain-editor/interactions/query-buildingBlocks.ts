import {
  BuildingBlockFigure,
  BuildingBlockFigureId,
} from "../models/editor-core/BuildingBlockFigure";

export const createQueryBuildingBlocks = (bb: BuildingBlockFigure[]) => {
  return {
    buildingBlockById: (id: BuildingBlockFigureId) =>
      bb.find((x) => x.id === id),
  };
};
export type QueryBuildingBlocks = ReturnType<typeof createQueryBuildingBlocks>;
