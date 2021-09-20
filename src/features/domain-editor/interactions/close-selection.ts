import { Tool } from "../models/editor-core/Tool";
import { BuildingBlockFigure } from "../models/editor-core/building-block-figure/BuildingBlockFigure";

type Listener = {
  tool: () => Tool;
  onDetails: (x: BuildingBlockFigure | null) => any;
};
export const createCloseSelection =
  ({ tool, onDetails }: Listener) =>
  () => {
    const current = tool();
    if (current.type === "SELECTION") {
      onDetails(null);
    }
  };

export type CloseSelection = ReturnType<typeof createCloseSelection>;
