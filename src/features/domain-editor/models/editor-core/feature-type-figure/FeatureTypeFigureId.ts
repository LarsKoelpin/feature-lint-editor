import vod from "@renke/vod";
import * as zod from "zod";
import { nanoid } from "nanoid";

const ID_START = "urn:feature-type:";
export const FeatureTypeFigureIdSchema = vod(
  "FeatureTypeFigureId",
  zod.string().refine((x) => x.startsWith(ID_START))
);

export type FeatureTypeFigureId = zod.infer<typeof FeatureTypeFigureIdSchema>;
export const FeatureTypeFigureId = FeatureTypeFigureIdSchema.create;
export const NewFeatureTypeFigureId = (): FeatureTypeFigureId =>
  FeatureTypeFigureId(ID_START + nanoid());
