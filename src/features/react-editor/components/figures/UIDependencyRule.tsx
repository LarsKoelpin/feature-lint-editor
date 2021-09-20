import * as React from "react";
import { Arrow } from "react-konva";
import { DependencyRuleFigure } from "../../../domain-editor/models/editor-core/dependency-rule/DependencyRuleFigure";
import { QueryFigures } from "../../../domain-editor/interactions/query-figures";
import { BuildingBlockFigureId } from "../../../domain-editor/models/editor-core/BuildingBlockFigure";

type Props = {
  rule: DependencyRuleFigure;
  queryBuildingBlocks: QueryFigures;
};
export const UiDependencyRule = ({ queryBuildingBlocks, rule }: Props) => {
  const from = queryBuildingBlocks.figureById(BuildingBlockFigureId(rule.from));
  const to = queryBuildingBlocks.figureById(BuildingBlockFigureId(rule.to));

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
