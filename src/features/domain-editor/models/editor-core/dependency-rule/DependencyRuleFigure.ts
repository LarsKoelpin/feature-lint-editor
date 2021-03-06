import vod from "@renke/vod";
import * as zod from "zod";
import { BuildingBlockFigureIdSchema } from "../building-block-figure/BuildingBlockFigure";
import { DependencyRuleFigureIdSchema } from "./DependencyRuleFigureId";

export const DependencyRuleFigureSchema = vod(
  "DependencyRuleFigure",
  zod.object({
    type: zod.literal("DependencyRuleFigure"),
    id: DependencyRuleFigureIdSchema,
    from: BuildingBlockFigureIdSchema,
    to: BuildingBlockFigureIdSchema,
  })
);
export type DependencyRuleFigure = zod.infer<typeof DependencyRuleFigureSchema>;
export const DependencyRuleFigure = DependencyRuleFigureSchema.create;
