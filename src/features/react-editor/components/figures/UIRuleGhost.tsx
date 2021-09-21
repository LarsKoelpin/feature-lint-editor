import * as React from "react";
import { Arrow } from "react-konva";
import { RuleTool } from "../../../domain-editor/models/editor-core/RuleTool";
import { ToolState } from "../../controllers/useToolState";
import {
  getHorizontalAnchorByNumber,
  getVerticalAnchorByNumber,
} from "./getAnchor";

type Props = {
  ruleTool: RuleTool;
  toolState: ToolState;
};
export const UiRuleGhost = ({ toolState, ruleTool }: Props) => {
  const currentTool = ruleTool;
  const startX = getHorizontalAnchorByNumber(
    currentTool.from!.x,
    currentTool.from!.width,
    toolState.ruleGhost!.endX,
    0
  );
  const startY = getVerticalAnchorByNumber(
    currentTool.from!.y,
    currentTool.from!.height,
    toolState.ruleGhost!.endY,
    0
  );
  return (
    <Arrow
      listening={false}
      points={[
        startX,
        startY,
        toolState.ruleGhost!.endX,
        toolState.ruleGhost!.endY,
      ]}
      strokeWidth={2}
      stroke={"black"}
    />
  );
};
