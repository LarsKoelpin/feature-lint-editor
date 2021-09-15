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
import { BuildingBlockFigure } from "../../domain-editor/models/editor-core/BuildingBlockFigure";
import { QueryBuildingBlocks } from "../../domain-editor/interactions/query-buildingBlocks";
import { isWaitingForSecondSelection } from "../../domain-editor/models/editor-core/RuleTool";
import { UpdateBuildingBlock } from "../../domain-editor/interactions/update-buildingblock";
import { UiDependencyRule } from "./figures/UIDependencyRule";
import { PlaceBuildingblock } from "../../domain-editor/interactions/place-buildingblock";
import styled from "styled-components";
import { NewFeatureTypeFigureId } from "../../domain-editor/models/editor-core/feature-type-figure/FeatureTypeFigureId";
import { UpdateFeatureType } from "../../domain-editor/interactions/update-featuretype";

type Props = {
  tool: ToolState;
  figures: Figures;
  placeFeature: (f: FeatureTypeFigure) => any;
  queryBuildingBlocks: QueryBuildingBlocks;
  updateBuildingBlock: UpdateBuildingBlock;
  updateFeatureType: UpdateFeatureType;
  placeBuildingBlock: PlaceBuildingblock;
  selectRule: (bb: BuildingBlockFigure) => any;
};
export const DrawingPlane = (props: Props) => {
  const {
    figures,
    tool,
    updateBuildingBlock,
    selectRule,
    queryBuildingBlocks,
    updateFeatureType,
  } = props;
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
          console.log("CLICK ON");
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
              key={x.id}
              figure={x}
              updateFeatureType={updateFeatureType}
            />
          ))}
          {figures.buildingBlockFigures.map((x) => (
            <UiBuildingBlockFigure
              key={x.id}
              updateBuildingBlock={updateBuildingBlock}
              figure={x}
              onSelect={selectRule}
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
          type: "FeatureFigure",
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
