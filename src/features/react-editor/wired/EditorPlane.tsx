import * as React from "react";
import styled from "styled-components";
import { ToolBar } from "../components/hud/ToolBar";
import { DrawingPlane } from "../components/DrawingPlane";
import { useToolState } from "../controllers/useToolState";
import { Tool } from "../../domain-editor/models/editor-core/Tool";
import { useDrawingState } from "../controllers/useDrawingState";

import { FeatureTypeFigure } from "../../domain-editor/models/editor-core/feature-type-figure/FeatureTypeFigure";
import { createQueryBuildingBlocks } from "../../domain-editor/interactions/query-buildingBlocks";
import { createUpdateBuildingBlock } from "../../domain-editor/interactions/update-buildingblock";
import { createPlaceDependencyRule } from "../../domain-editor/interactions/place-dependency-rule";
import { createSelectBuildingBlockForRule } from "../../domain-editor/interactions/building-block-selection";
import { createPlaceBuildingBlock } from "../../domain-editor/interactions/place-buildingblock";
import { Details } from "../components/Details";
import { createCloseSelection } from "../../domain-editor/interactions/close-selection";
import { BuildingBlockFigureId } from "../../domain-editor/models/editor-core/BuildingBlockFigure";
import { createConvertToFeatureLint } from "../../domain-converter/interactions/convertToFeatureLintJson";
import { TopBar } from "../components/hud/TopBar";
import { createUpdateFeatureType } from "../../domain-editor/interactions/update-featuretype";

type Props = {};
export const EditorPlane = (props: Props) => {
  const figures = useDrawingState();
  const tool = useToolState();

  const selectToolInteraction = (t: Tool) => tool.setCurrentTool(t);
  const placeFeature = (f: FeatureTypeFigure) => {
    figures.setFeatureTypeFigures((old) => [...old, f]);
    tool.setCurrentTool(Tool({ type: "SELECTION" }));
  };

  const placeBuildingBlock = createPlaceBuildingBlock({
    onBuildingBlocksUpdated: (bbs) => {
      figures.setBuildingBlockFigures(bbs);
      tool.setCurrentTool(Tool({ type: "SELECTION" }));
    },
    buildingBlocks: () => figures.buildingBlockFigures,
  });

  const placeDependencyRule = createPlaceDependencyRule({
    onRules: (r) => figures.setRules(r),
    buildingBlocks: () => figures.buildingBlockFigures,
    rules: () => figures.rules,
  });

  const closeSelection = createCloseSelection({
    tool: () => tool.currentTool,
    onDetails: (d) => tool.setDetails(d ? BuildingBlockFigureId(d.id) : null),
  });
  const toolBuildingBlockInteraction = createSelectBuildingBlockForRule({
    onToolUpdated: (t: Tool) => tool.setCurrentTool(t),
    onSelectedBuildingBlock: (bb) =>
      tool.setDetails(BuildingBlockFigureId(bb.id)),
    placeDependencyRule,
    tool: () => tool.currentTool,
  });

  const queryBuildingBlocks = createQueryBuildingBlocks(
    figures.buildingBlockFigures
  );

  const updateBuildingBlock = createUpdateBuildingBlock(
    { onBuildingBlocks: figures.setBuildingBlockFigures },
    figures.buildingBlockFigures
  );

  const updateFeatureType = createUpdateFeatureType({
    onFeatures: (x) => figures.setFeatureTypeFigures(x),
    featureTypes: () => figures.featureTypeFigures,
  });

  const convertToJson = createConvertToFeatureLint({
    buildingBlocks: () => figures.buildingBlockFigures,
    dependencyRules: () => figures.rules,
    featureTypes: () => figures.featureTypeFigures,
    onConfig: (cfg) => alert(JSON.stringify(cfg)),
  });

  return (
    <Plane>
      <TopBar convertToJson={convertToJson} />
      <ToolBar tool={tool} selectTool={selectToolInteraction} />
      <DrawingPlane
        updateBuildingBlock={updateBuildingBlock}
        updateFeatureType={updateFeatureType}
        queryBuildingBlocks={queryBuildingBlocks}
        placeFeature={placeFeature}
        placeBuildingBlock={placeBuildingBlock}
        selectRule={toolBuildingBlockInteraction}
        tool={tool}
        figures={figures}
      />
      {tool.details ? (
        <Details
          query={queryBuildingBlocks}
          onClose={closeSelection}
          buildingBlockId={tool.details}
        />
      ) : null}
    </Plane>
  );
};

const Plane = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
