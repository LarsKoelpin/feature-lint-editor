import * as React from "react";
import { Arrow } from "react-konva";
import { DependencyRuleFigure } from "../../../domain-editor/models/editor-core/dependency-rule/DependencyRuleFigure";
import { QueryFigures } from "../../../domain-editor/interactions/query-figures";
import { BuildingBlockFigureId } from "../../../domain-editor/models/editor-core/building-block-figure/BuildingBlockFigure";
import { SelectionAction } from "../../../domain-editor/interactions/tool-interactions";

type Props = {
  rule: DependencyRuleFigure;
  queryBuildingBlocks: QueryFigures;
  select: SelectionAction;
};
export const UiDependencyRule = ({
  queryBuildingBlocks,
  rule,
  select,
}: Props) => {
  const from = queryBuildingBlocks.buildingBlockById(
    BuildingBlockFigureId(rule.from)
  );
  const to = queryBuildingBlocks.buildingBlockById(
    BuildingBlockFigureId(rule.to)
  );

  if (to && from) {
    return (
      <Arrow
        onClick={() => select(rule, "ICON")}
        points={[from.x, from.y, to.x, to.y]}
        stroke={"red"}
        strokeWidth={5}
      />
    );
  }
  return null;
};
