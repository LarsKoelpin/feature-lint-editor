import vod from "@renke/vod";
import * as zod from "zod";
import { FeatureTypeFigureIdSchema } from "./FeatureTypeFigureId";

export const FeatureTypeFigureSchema = vod(
  "FeatureRep",
  zod.object({
    id: FeatureTypeFigureIdSchema,
    name: zod.string(),
    type: zod.literal("FeatureFigure"),
    x: zod.number().positive(),
    y: zod.number().positive(),
    width: zod.number().positive(),
    height: zod.number().positive(),
  })
);

export type FeatureTypeFigure = zod.infer<typeof FeatureTypeFigureSchema>;
export const FeatureTypeFigure = FeatureTypeFigureSchema.create;

export const withPosition = (x: number, y: number, bb: FeatureTypeFigure) => {
  return FeatureTypeFigure({ ...bb, x, y });
};

export const withName = (name: string, bb: FeatureTypeFigure) => {
  return FeatureTypeFigure({ ...bb, name: name });
};
