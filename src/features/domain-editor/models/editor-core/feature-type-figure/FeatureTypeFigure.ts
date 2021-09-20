import vod from "@renke/vod";
import * as zod from "zod";
import { FeatureTypeFigureIdSchema } from "./FeatureTypeFigureId";
import { FigureSchema } from "../figure/Figure";

export const FeatureTypeFigureSchema = vod(
  "FeatureTypeFigure",
  zod
    .object({
      id: FeatureTypeFigureIdSchema,
      name: zod.string(),
      type: zod.literal("FeatureTypeFigure"),
    })
    .extend(FigureSchema)
);

export type FeatureTypeFigure = zod.infer<typeof FeatureTypeFigureSchema>;
export const FeatureTypeFigure = FeatureTypeFigureSchema.create;

export const withName = (
  name: string,
  bb: FeatureTypeFigure
): FeatureTypeFigure => {
  return FeatureTypeFigure({ ...bb, name: name });
};
