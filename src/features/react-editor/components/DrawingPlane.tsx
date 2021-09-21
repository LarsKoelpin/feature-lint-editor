import * as React from "react";
import { Arrow, Layer, Rect, Stage } from "react-konva";
import { useWindowSize } from "./useWindowSize";
import { Figures } from "../controllers/useDrawingState";

import { ToolState } from "../controllers/useToolState";
import { RuleGhost } from "../../domain-editor/models/editor-core/RuleGhost";
import { getPos } from "./getPos";
import { UiFeature } from "./figures/UIFeature";
import { UiBuildingBlockFigure } from "./figures/UIBuildingBlockFigure";
import { FeatureTypeFigure } from "../../domain-editor/models/editor-core/feature-type-figure/FeatureTypeFigure";
import { QueryFigures } from "../../domain-editor/interactions/query-figures";
import { isWaitingForSecondSelection } from "../../domain-editor/models/editor-core/RuleTool";
import { UiDependencyRule } from "./figures/UIDependencyRule";
import { PlaceBuildingblock } from "../../domain-editor/interactions/place-buildingblock";
import styled from "styled-components";
import { NewFeatureTypeFigureId } from "../../domain-editor/models/editor-core/feature-type-figure/FeatureTypeFigureId";
import { UpdateFigure } from "../../domain-editor/interactions/update-figure";
import { SelectionAction } from "../../domain-editor/interactions/tool-interactions";

type Props = {
  tool: ToolState;
  figures: Figures;
  placeFeature: (f: FeatureTypeFigure) => any;
  queryBuildingBlocks: QueryFigures;
  updateFigure: UpdateFigure;
  placeBuildingBlock: PlaceBuildingblock;
  onSelectFigure: SelectionAction;
};
export const DrawingPlane = (props: Props) => {
  const { figures, tool, updateFigure, onSelectFigure, queryBuildingBlocks } =
    props;
  const size = useWindowSize();

  const { currentTool } = tool;

  return (
    <Container>
      <Stage
        height={size.height}
        width={size.width}
        onMouseMove={(e) => {
          const screenPos = getPos(e);
          tool.setRuleGhost((oldGhost) => {
            return RuleGhost({
              endX: screenPos.x,
              endY: screenPos.y,
            });
          });
        }}
        onClick={(e) => {
          const screenPos = getPos(e);
          clickListener(props, { x: screenPos.x, y: screenPos.y });
        }}
      >
        <Layer>
          <Rect
            listening={false}
            x={0}
            y={0}
            width={size.width}
            height={size.height}
            fill={"#fbfbfb"}
          />
        </Layer>
        <Layer>
          {figures.featureTypeFigures.map((x) => (
            <UiFeature
              onSelect={onSelectFigure}
              key={x.id}
              figure={x}
              updateFigure={updateFigure}
            />
          ))}
          {figures.buildingBlockFigures.map((x) => (
            <UiBuildingBlockFigure
              key={x.id}
              updateFigure={updateFigure}
              figure={x}
              onSelect={onSelectFigure}
            />
          ))}
          {isWaitingForSecondSelection(currentTool) && tool.ruleGhost ? (
            <Arrow
              listening={false}
              points={[
                currentTool.from!.x,
                currentTool.from!.y,
                tool.ruleGhost?.endX,
                tool.ruleGhost?.endY,
              ]}
              strokeWidth={2}
              stroke={"red"}
            />
          ) : null}
          {figures.rules.map((rule) => {
            return (
              <UiDependencyRule
                select={onSelectFigure}
                key={rule.id}
                queryBuildingBlocks={queryBuildingBlocks}
                rule={rule}
              />
            );
          })}
        </Layer>
      </Stage>
    </Container>
  );
};

const clickListener = (
  { tool, placeFeature, placeBuildingBlock }: Props,
  screenPos: { x: number; y: number }
) => {
  switch (tool.currentTool.type) {
    case "PLACE_FEATURE":
      placeFeature(
        FeatureTypeFigure({
          name: "unnamed-feature",
          id: NewFeatureTypeFigureId(),
          height: 500,
          width: 500,
          x: screenPos.x,
          y: screenPos.y,
          type: "FeatureTypeFigure",
          resizing: false,
        })
      );
      break;
    case "PLACE_BUILDING_BLOCK":
      placeBuildingBlock(screenPos.x, screenPos.y);
      break;
    default:
      break;
  }
};

const Container = styled.div`
  cursor: crosshair;
`;
