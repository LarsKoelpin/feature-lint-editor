import vod from "@renke/vod";
import * as zod from "zod";
import { BuildingBlockFigureSchema } from "./BuildingBlockFigure";
import { Tool } from "./Tool";

export const RuleToolSchema = vod(
  "RuleTool",
  zod.object({
    type: zod.literal("PLACE_RULE"),
    from: BuildingBlockFigureSchema.nullable(),
    to: BuildingBlockFigureSchema.nullable(),
  })
);
export type RuleTool = zod.infer<typeof RuleToolSchema>;
export const RuleTool = RuleToolSchema.create;

export const isFirstSelection = (t: RuleTool) => {
  return t.from === null;
};

export const isWaitingForSecondSelection = (t: Tool): t is RuleTool => {
  return t.type === "PLACE_RULE" && t.from !== null;
};
