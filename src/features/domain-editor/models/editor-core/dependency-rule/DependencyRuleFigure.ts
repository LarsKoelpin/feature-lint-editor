import vod from "@renke/vod";
import * as zod from "zod";
import { BuildingBlockFigureIdSchema } from "../BuildingBlockFigure";
import { DependencyRuleFigureIdSchema } from "./DependencyRuleFigureId";

export const DependencyRuleFigureSchema = vod(
  "DependencyRuleFigure",
  zod.object({
    id: DependencyRuleFigureIdSchema,
    from: BuildingBlockFigureIdSchema,
    to: BuildingBlockFigureIdSchema,
  })
);
export type DependencyRuleFigure = zod.infer<typeof DependencyRuleFigureSchema>;
export const DependencyRuleFigure = DependencyRuleFigureSchema.create;
