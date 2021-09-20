import { isFirstSelection, RuleTool } from "../models/editor-core/RuleTool";
import { Tool } from "../models/editor-core/Tool";
import { BuildingBlockFigure } from "../models/editor-core/BuildingBlockFigure";
import { PlaceDependencyRule } from "./place-dependency-rule";
import { Figure, isBuildingBlock } from "../models/editor-core/figure/Figure";

type Source = "BLOCK" | "ICON";

type Listener = {
  onToolUpdated: (t: Tool) => any;
  onSelectedFigure: (bb: Figure | null) => any;
  placeDependencyRule: PlaceDependencyRule;
  tool: () => Tool;
};
export const createSelectBuildingBlockForRule =
  ({ onToolUpdated, placeDependencyRule, tool, onSelectedFigure }: Listener) =>
  (bb: Figure | null, source: Source) => {
    const currentTool = tool();

    if (currentTool.type === "SELECTION" && source !== "BLOCK") {
      console.log("HI", bb);
      onSelectedFigure(bb);
      return;
    }

    if (currentTool.type === "PLACE_RULE") {
      const tool: RuleTool = RuleTool(currentTool);
      const firstSelection = isFirstSelection(tool);
      if (firstSelection && bb !== null && isBuildingBlock(bb)) {
        const updatedTool = Tool({ ...currentTool, from: bb });
        onToolUpdated(updatedTool);
      } else {
        if (currentTool.from === null || bb === null || !isBuildingBlock(bb)) {
          throw new Error(
            "Invalid state. Second Place Rule does only work on Valid BBs, but was placed on " +
              bb
          );
        }
        placeDependencyRule(BuildingBlockFigure(currentTool.from), bb);
        onToolUpdated(Tool({ type: "SELECTION" }));
      }
    }
  };

export type SelectionAction = ReturnType<
  typeof createSelectBuildingBlockForRule
>;
