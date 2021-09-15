import * as React from "react";
import { Arrow } from "react-konva";
import { DependencyRuleFigure } from "../../../domain-editor/models/editor-core/dependency-rule/DependencyRuleFigure";
import { QueryBuildingBlocks } from "../../../domain-editor/interactions/query-buildingBlocks";
import { BuildingBlockFigureId } from "../../../domain-editor/models/editor-core/BuildingBlockFigure";

type Props = {
  rule: DependencyRuleFigure;
  queryBuildingBlocks: QueryBuildingBlocks;
};
export const UiDependencyRule = ({ queryBuildingBlocks, rule }: Props) => {
  const from = queryBuildingBlocks.buildingBlockById(
    BuildingBlockFigureId(rule.from)
  );
  const to = queryBuildingBlocks.buildingBlockById(
    BuildingBlockFigureId(rule.to)
  );

  if (to && from) {
    return (
      <Arrow
        onClick={() => console.log("HELLO")}
        points={[from.x, from.y, to.x, to.y]}
        stroke={"red"}
        strokeWidth={5}
      />
    );
  }
  return null;
};
