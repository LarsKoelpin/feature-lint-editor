import vod from "@renke/vod";
import * as zod from "zod";
import { nanoid } from "nanoid";

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
  zod.object({
    id: BuildingBlockFigureIdSchema,
    bbName: zod.string(),
    type: zod.literal("BuildingBlockFigure"),
    x: zod.number().positive(),
    y: zod.number().positive(),
    width: zod.number().positive(),
    height: zod.number().positive(),
  })
);

export type BuildingBlockFigure = zod.infer<typeof BuildingBlockFigureSchema>;
export const BuildingBlockFigure = BuildingBlockFigureSchema.create;

export const withPosition = (x: number, y: number, bb: BuildingBlockFigure) => {
  return BuildingBlockFigure({ ...bb, x, y });
};

export const withName = (name: string, bb: BuildingBlockFigure) => {
  return BuildingBlockFigure({ ...bb, bbName: name });
};
