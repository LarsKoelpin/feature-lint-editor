import vod from "@renke/vod";
import * as zod from "zod";
import { nanoid } from "nanoid";

const ID_START = "urn:dependency-rule:";
export const DependencyRuleFigureIdSchema = vod(
  "DependencyRuleFigureId",
  zod.string().refine((x) => x.startsWith(ID_START))
);

export type DependencyRuleFigureId = zod.infer<
  typeof DependencyRuleFigureIdSchema
>;
export const DependencyRuleFigureId = DependencyRuleFigureIdSchema.create;
export const NewDependencyRuleFigureId = () => ID_START + nanoid();
