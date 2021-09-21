import {
  BuildingBlockFigure,
  BuildingBlockFigureId,
} from "../models/editor-core/building-block-figure/BuildingBlockFigure";
import { FeatureTypeFigure } from "../models/editor-core/feature-type-figure/FeatureTypeFigure";
import { DependencyRuleFigure } from "../models/editor-core/dependency-rule/DependencyRuleFigure";

export const createQueryFigures = (
  bb: BuildingBlockFigure[],
  featureFigures: FeatureTypeFigure[],
  dependencyRules: DependencyRuleFigure[]
) => {
  return {
    figureById: (id: string) => {
      // TODO LKO: Watch URN first to get the correct array
      const maybeBb = bb.find((x) => x.id === id);
      if (maybeBb) {
        return maybeBb;
      }
      const maybeFeature = featureFigures.find((x) => x.id === id);
      if (maybeFeature) {
        return maybeFeature;
      }

      const maybeRule = dependencyRules.find((x) => x.id === id);
      if (maybeRule) {
        return maybeRule;
      }
      return null;
    },
    buildingBlockById: (id: BuildingBlockFigureId) => {
      const found = bb.find((b) => b.id === id);
      if (!found) {
        throw new Error(
          "Did not found BB with id " + id + " but is expected in state"
        );
      }
      return found;
    },
  };
};
export type QueryFigures = ReturnType<typeof createQueryFigures>;
