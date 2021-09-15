import vod from "@renke/vod";
import * as zod from "zod";

export const RuleGhostSchema = vod(
  "RuleGhost",
  zod.object({
    endX: zod.number(),
    endY: zod.number(),
  })
);
export type RuleGhost = zod.infer<typeof RuleGhostSchema>;
export const RuleGhost = RuleGhostSchema.create;
