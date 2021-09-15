import { useState } from "react";
import { Tool } from "../../domain-editor/models/editor-core/Tool";
import { RuleGhost } from "../../domain-editor/models/editor-core/RuleGhost";
import { BuildingBlockFigureId } from "../../domain-editor/models/editor-core/BuildingBlockFigure";

export const useToolState = () => {
  const [currentTool, setCurrentTool] = useState<Tool>(
    Tool({ type: "SELECTION" })
  );
  const [ruleGhost, setRuleGhost] = useState<RuleGhost | null>(null);
  const [details, setDetails] = useState<BuildingBlockFigureId | null>(null);

  return {
    currentTool,
    setCurrentTool,
    ruleGhost,
    setRuleGhost,
    details,
    setDetails,
  };
};

export type ToolState = ReturnType<typeof useToolState>;
