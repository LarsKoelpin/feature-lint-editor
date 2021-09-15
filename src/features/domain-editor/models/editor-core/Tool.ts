import vod from "@renke/vod";
import * as zod from "zod";
import { RuleTool, RuleToolSchema } from "./RuleTool";

export const SelectionToolSchema = vod(
  "Visual-Selection",
  zod.object({
    type: zod.literal("SELECTION"),
  })
);
export const PlaceBuildingBlockSchema = vod(
  "Visual-BB",
  zod.object({
    type: zod.literal("PLACE_BUILDING_BLOCK"),
  })
);
export const PlaceFeatureTypeSchema = vod(
  "Visual-Feature",
  zod.object({
    type: zod.literal("PLACE_FEATURE"),
  })
);

export const ToolSchema = vod(
  "Tool",
  zod.union([
    SelectionToolSchema,
    PlaceBuildingBlockSchema,
    PlaceFeatureTypeSchema,
    RuleToolSchema,
  ])
);

export const VisualBuildingBlock = PlaceBuildingBlockSchema.create;
export const SelectionTool = SelectionToolSchema.create;
export const Tool = ToolSchema.create;
export type Tool = zod.infer<typeof ToolSchema> | RuleTool;
