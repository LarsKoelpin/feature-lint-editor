import * as React from "react";
import { Arrow } from "react-konva";
import { DependencyRuleFigure } from "../../../domain-editor/models/editor-core/dependency-rule/DependencyRuleFigure";
import { QueryFigures } from "../../../domain-editor/interactions/query-figures";
import {
  BuildingBlockFigure,
  BuildingBlockFigureId,
} from "../../../domain-editor/models/editor-core/building-block-figure/BuildingBlockFigure";
import { SelectionAction } from "../../../domain-editor/interactions/tool-interactions";
import { getHorizontalAnchor, getVerticalAnchor } from "./getAnchor";

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
  const from: BuildingBlockFigure = queryBuildingBlocks.buildingBlockById(
    BuildingBlockFigureId(rule.from)
  );
  const to: BuildingBlockFigure = queryBuildingBlocks.buildingBlockById(
    BuildingBlockFigureId(rule.to)
  );

  const startX = getHorizontalAnchor(from, to);
  const startY = getVerticalAnchor(from, to);

  const endX = getHorizontalAnchor(to, from);
  const endY = getVerticalAnchor(to, from);

  if (to && from) {
    return (
      <Arrow
        dashEnabled={true}
        dash={[10, 5]}
        onClick={() => select(rule, "ICON")}
        points={[startX, startY, endX, endY]}
        stroke={"black"}
        strokeWidth={2}
      />
    );
  }
  return null;
};
