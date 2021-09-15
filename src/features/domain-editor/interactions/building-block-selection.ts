import { isFirstSelection, RuleTool } from "../models/editor-core/RuleTool";
import { Tool } from "../models/editor-core/Tool";
import { BuildingBlockFigure } from "../models/editor-core/BuildingBlockFigure";
import { PlaceDependencyRule } from "./place-dependency-rule";

type Listener = {
  onToolUpdated: (t: Tool) => any;
  onSelectedBuildingBlock: (bb: BuildingBlockFigure) => any;
  placeDependencyRule: PlaceDependencyRule;
  tool: () => Tool;
};
export const createSelectBuildingBlockForRule =
  ({
    onToolUpdated,
    placeDependencyRule,
    tool,
    onSelectedBuildingBlock,
  }: Listener) =>
  (bb: BuildingBlockFigure) => {
    const currentTool = tool();

    if (currentTool.type === "SELECTION") {
      onSelectedBuildingBlock(bb);
      return;
    }

    if (currentTool.type === "PLACE_RULE") {
      const tool: RuleTool = RuleTool(currentTool);
      const firstSelection = isFirstSelection(tool);
      if (firstSelection) {
        const updatedTool = Tool({ ...currentTool, from: bb });
        onToolUpdated(updatedTool);
      } else {
        if (currentTool.from === null) {
          throw new Error("Invalid state");
        }
        placeDependencyRule(BuildingBlockFigure(currentTool.from), bb);
        onToolUpdated(Tool({ type: "SELECTION" }));
      }
    }
  };
