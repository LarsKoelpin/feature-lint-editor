import { DependencyRuleFigure } from "../../domain-editor/models/editor-core/dependency-rule/DependencyRuleFigure";
import { BuildingBlockFigure } from "../../domain-editor/models/editor-core/BuildingBlockFigure";
import { FeatureTypeFigure } from "../../domain-editor/models/editor-core/feature-type-figure/FeatureTypeFigure";
import {
  GeometryRect,
  intersectRect,
  toGeometryRect,
} from "../../domain-editor/models/editor-core/figure/geometry";

type StateDeps = {
  dependencyRules: () => DependencyRuleFigure[];
  buildingBlocks: () => BuildingBlockFigure[];
  featureTypes: () => FeatureTypeFigure[];
  onConfig: (cfg: any) => any;
};

export const createConvertToFeatureLint =
  ({ dependencyRules, buildingBlocks, featureTypes, onConfig }: StateDeps) =>
  () => {
    const allFeatureTypes: { [featurName: string]: any } = {};
    for (const f of featureTypes()) {
      const featureRect: GeometryRect = toGeometryRect(f);
      allFeatureTypes[f.name] = {};
      for (const bb of buildingBlocks()) {
        const bbRect: GeometryRect = toGeometryRect(bb);
        if (intersectRect(bbRect, featureRect)) {
          allFeatureTypes[f.name] = {
            ...allFeatureTypes[f.name],
            [bb.bbName]: {},
          };
        }
      }
    }
    const created = {
      $schema:
        "https://raw.githubusercontent.com/feature-lint/feature-lint/pages/schema/feature-lint-v0.0.15.schema.json",
      rootDir: "./src/features",
      featureTypes: allFeatureTypes,
    };
    console.log(created);
    onConfig(created);
  };
export type ConvertToFeatureLintJson = ReturnType<
  typeof createConvertToFeatureLint
>;
