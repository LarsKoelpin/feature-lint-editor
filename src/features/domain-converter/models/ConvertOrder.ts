import vod from "@renke/vod";
import * as zod from "zod";
import { DependencyRuleFigureSchema } from "../../domain-editor/models/editor-core/dependency-rule/DependencyRuleFigure";
import { BuildingBlockFigureSchema } from "../../domain-editor/models/editor-core/BuildingBlockFigure";
import { FeatureTypeFigureSchema } from "../../domain-editor/models/editor-core/feature-type-figure/FeatureTypeFigure";

export const ConvertOrderSchema = vod(
  "ConvertOrder",
  zod.object({
    dependencyRules: zod.array(DependencyRuleFigureSchema),
    buildingBlocks: zod.array(BuildingBlockFigureSchema),
    featureTypes: zod.array(FeatureTypeFigureSchema),
    type: zod.literal("ConvertOrder"),
  })
);

export type ConvertOrder = zod.infer<typeof ConvertOrderSchema>;
export const ConvertOrder = ConvertOrderSchema.create;
