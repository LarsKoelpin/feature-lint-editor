import {
  BuildingBlockFigure,
  withName,
  withPosition,
} from "../models/editor-core/BuildingBlockFigure";
import * as R from "ramda";

type Listener = {
  onBuildingBlocks: (bb: BuildingBlockFigure[]) => any;
};
export const createUpdateBuildingBlock = (
  { onBuildingBlocks }: Listener,
  bbs: BuildingBlockFigure[]
) => {
  return {
    updateName: (bb: BuildingBlockFigure, newName: string) => {
      const b = bbs.findIndex((h) => h.id === bb.id);
      if (b === -1) {
        return bbs;
      }
      const result = R.adjust(b, (old) => withName(newName, old), bbs);
      onBuildingBlocks(result);
      return result;
    },
    updatePosition: (
      bb: BuildingBlockFigure,
      x: number,
      y: number
    ): BuildingBlockFigure[] => {
      const b = bbs.findIndex((h) => h.id === bb.id);
      if (b === -1) {
        return bbs;
      }
      const result = R.adjust(b, (old) => withPosition(x, y, old), bbs);
      onBuildingBlocks(result);
      return result;
    },
  };
};

export type UpdateBuildingBlock = ReturnType<typeof createUpdateBuildingBlock>;
