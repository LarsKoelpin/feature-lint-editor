import { BuildingBlockFigure } from "../models/editor-core/BuildingBlockFigure";
import { FeatureTypeFigure } from "../models/editor-core/feature-type-figure/FeatureTypeFigure";

export const createQueryFigures = (
  bb: BuildingBlockFigure[],
  featureFigures: FeatureTypeFigure[]
) => {
  return {
    figureById: (id: string) => {
      const maybeBb = bb.find((x) => x.id === id);
      if (maybeBb) {
        return maybeBb;
      }
      const maybeFeature = featureFigures.find((x) => x.id === id);
      if (maybeFeature) {
        return maybeFeature;
      }
      return null;
    },
  };
};
export type QueryFigures = ReturnType<typeof createQueryFigures>;
