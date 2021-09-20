import {
  BuildingBlockFigure,
  BuildingBlockFigureId,
  withBuildingBlockName,
} from "../models/editor-core/building-block-figure/BuildingBlockFigure";
import * as R from "ramda";
import {
  Figure,
  withPosition,
  withResizing,
  withSize,
} from "../models/editor-core/figure/Figure";
import {
  FeatureTypeFigure,
  withName,
} from "../models/editor-core/feature-type-figure/FeatureTypeFigure";
import { FeatureTypeFigureId } from "../models/editor-core/feature-type-figure/FeatureTypeFigureId";

type Listener = {
  onBuildingBlocks: (bb: BuildingBlockFigure[]) => any;
  onFeatureTypes: (bb: FeatureTypeFigure[]) => any;
  buildingBlocks: () => BuildingBlockFigure[];
  featureTypes: () => FeatureTypeFigure[];
};
export const createUpdateFigure = ({
  onBuildingBlocks,
  buildingBlocks,
  onFeatureTypes,
  featureTypes,
}: Listener) => {
  const allBuildingBlocks = buildingBlocks();
  const allFeatureTypes = featureTypes();

  const findOrThrowBuildingBlock =
    createFindOrThrowBuildingBlock(allBuildingBlocks);
  const findOrThrowFeatureType = createFindOrThrowFeatureType(allFeatureTypes);
  return {
    updateFeatureTypeName: (bb: FeatureTypeFigure, newName: string) => {
      const b = findOrThrowFeatureType(FeatureTypeFigureId(bb.id));
      const result = R.adjust(
        b,
        (old) => withName(newName, old),
        allFeatureTypes
      );
      onFeatureTypes(result);
      return result;
    },
    updateBuildingBlockName: (bb: BuildingBlockFigure, newName: string) => {
      const b = findOrThrowBuildingBlock(BuildingBlockFigureId(bb.id));
      const result = R.adjust(
        b,
        (old) => BuildingBlockFigure(withBuildingBlockName(newName, old)),
        allBuildingBlocks
      );
      onBuildingBlocks(result);
      return result;
    },
    updateShape: (bb: Figure, width: number, height: number) => {
      switch (bb.type) {
        case "BuildingBlockFigure":
          const foundBuildingBlock = findOrThrowBuildingBlock(
            BuildingBlockFigureId(bb.id)
          );
          const result = R.adjust(
            foundBuildingBlock,
            (old) => {
              return withResizing(false, withSize(width, height, old));
            },
            allBuildingBlocks
          );
          onBuildingBlocks(result);
          break;
        case "DependencyRuleFigure":
          break;
        case "FeatureTypeFigure": {
          const fti = findOrThrowFeatureType(FeatureTypeFigureId(bb.id));
          onFeatureTypes(
            R.adjust(
              fti,
              (old) => withResizing(false, withSize(width, height, old)),
              allFeatureTypes
            )
          );

          break;
        }
      }
    },
    resizing: (resizing: boolean, bb: Figure) => {
      switch (bb.type) {
        case "BuildingBlockFigure": {
          const found = findOrThrowBuildingBlock(BuildingBlockFigureId(bb.id));
          const result = R.adjust(
            found,
            (old) => withResizing(resizing, old),
            allBuildingBlocks
          );
          onBuildingBlocks(result);
          break;
        }
        case "DependencyRuleFigure":
          break;
        case "FeatureTypeFigure": {
          const found = findOrThrowFeatureType(FeatureTypeFigureId(bb.id));
          const result = R.adjust(
            found,
            (old) => withResizing(resizing, old),
            allFeatureTypes
          );
          onFeatureTypes(result);
          break;
        }
      }
    },
    updatePosition: (bb: Figure, x: number, y: number): void => {
      switch (bb.type) {
        case "FeatureTypeFigure":
          const feature = findOrThrowFeatureType(FeatureTypeFigureId(bb.id));
          onFeatureTypes(
            R.adjust(
              feature,
              (old) => {
                return withPosition(x, y, old);
              },
              allFeatureTypes
            )
          );
          break;
        case "DependencyRuleFigure":
          break;
        case "BuildingBlockFigure":
          const b = findOrThrowBuildingBlock(BuildingBlockFigureId(bb.id));
          const result = R.adjust(
            b,
            (old) => withPosition(x, y, old),
            allBuildingBlocks
          );
          onBuildingBlocks(result);
          break;
      }
    },
  };
};

const createFindOrThrowBuildingBlock =
  (bb: BuildingBlockFigure[]) => (id: BuildingBlockFigureId) => {
    const f = bb.findIndex((x) => x.id === id);
    if (f !== -1) {
      return f;
    }
    throw new Error("Cannot find bb");
  };

const createFindOrThrowFeatureType =
  (bb: FeatureTypeFigure[]) => (id: FeatureTypeFigureId) => {
    const f = bb.findIndex((x) => x.id === id);
    if (f !== -1) {
      return f;
    }
    throw new Error("Cannot find bb");
  };

export type UpdateFigure = ReturnType<typeof createUpdateFigure>;
