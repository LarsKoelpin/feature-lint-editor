import vod from "@renke/vod";
import * as zod from "zod";
import { nanoid } from "nanoid";
import { FigureSchema } from "../figure/Figure";

const ID_SCHEMA = "urn:building-block-figure:";
export const BuildingBlockFigureIdSchema = vod(
  "BuildingBlockFigureId",
  zod.string().refine((x) => x.startsWith(ID_SCHEMA))
);
export type BuildingBlockFigureId = zod.infer<
  typeof BuildingBlockFigureIdSchema
>;
export const BuildingBlockFigureId = BuildingBlockFigureIdSchema.create;

export const NewBuildingBlockFigureId = () =>
  BuildingBlockFigureIdSchema.create(ID_SCHEMA + nanoid());

export const BuildingBlockFigureSchema = vod(
  "BuildingBlockFigure",
  zod
    .object({
      id: BuildingBlockFigureIdSchema,
      bbName: zod.string(),
      type: zod.literal("BuildingBlockFigure"),
    })
    .extend(FigureSchema)
);

export type BuildingBlockFigure = zod.infer<typeof BuildingBlockFigureSchema>;
export const BuildingBlockFigure = BuildingBlockFigureSchema.create;

export const withBuildingBlockName = (
  name: string,
  bb: BuildingBlockFigure
) => {
  return { ...bb, bbName: name };
};
