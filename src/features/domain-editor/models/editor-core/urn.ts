import vod from "@renke/vod";
import * as zod from "zod";

export const UrnSchema = vod(
  "URN",
  zod.string().refine((x) => x.startsWith("urn:"))
);
