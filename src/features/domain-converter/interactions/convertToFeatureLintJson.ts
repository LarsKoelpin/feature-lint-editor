import { DependencyRuleFigure } from "../../domain-editor/models/editor-core/dependency-rule/DependencyRuleFigure";
import {
  BuildingBlockFigure,
  BuildingBlockFigureId,
} from "../../domain-editor/models/editor-core/BuildingBlockFigure";
import { FeatureTypeFigure } from "../../domain-editor/models/editor-core/feature-type-figure/FeatureTypeFigure";
import {
  GeometryRect,
  intersectRect,
  toGeometryRect,
} from "../../domain-editor/models/editor-core/figure/geometry";
import { QueryFigures } from "../../domain-editor/interactions/query-figures";
import { isBuildingBlock } from "../../domain-editor/models/editor-core/figure/Figure";

type StateDeps = {
  dependencyRules: () => DependencyRuleFigure[];
  buildingBlocks: () => BuildingBlockFigure[];
  featureTypes: () => FeatureTypeFigure[];
  query: QueryFigures;
};

export const createConvertToFeatureLint =
  ({ dependencyRules, buildingBlocks, featureTypes, query }: StateDeps) =>
  () => {
    console.log("HELLO");
    console.log("Found ", dependencyRules());
    const allFeatureTypes: { [featurName: string]: any } = {};
    for (const f of featureTypes()) {
      const featureRect: GeometryRect = toGeometryRect(f);
      allFeatureTypes[f.name] = {};
      for (const bb of buildingBlocks()) {
        const bbRect: GeometryRect = toGeometryRect(bb);
        if (intersectRect(bbRect, featureRect)) {
          let depCriteria: string[] = [];
          for (const allowedImport of dependencyRules()) {
            const bb1 = query.figureById(
              BuildingBlockFigureId(allowedImport.from)
            );
            const bb2 = query.figureById(
              BuildingBlockFigureId(allowedImport.to)
            );

            const isRuleRelevantForBb = bb1?.id === bb.id;
            if (!isRuleRelevantForBb) {
              continue;
            }

            if (!bb1 || !bb2) {
              throw new Error(
                "Trying to create a dep rule from " +
                  bb1 +
                  " to " +
                  bb2 +
                  " but one of them is null"
              );
            }
            if (isBuildingBlock(bb2)) {
              depCriteria = [...depCriteria, "@" + bb2.bbName];
            }
          }
          allFeatureTypes[f.name] = {
            ...allFeatureTypes[f.name],
            [bb.bbName]: {
              rules: [
                {
                  name: "dependencies",
                  criteria: depCriteria,
                },
              ],
            },
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
    return created;
  };
export type ConvertToFeatureLintJson = ReturnType<
  typeof createConvertToFeatureLint
>;
