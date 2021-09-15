import * as React from "react";
import styled from "styled-components";
import { BuildingBlockFigureId } from "../../domain-editor/models/editor-core/BuildingBlockFigure";
import { QueryBuildingBlocks } from "../../domain-editor/interactions/query-buildingBlocks";

type Props = {
  buildingBlockId: BuildingBlockFigureId;
  query: QueryBuildingBlocks;
  onClose: () => any;
};
export const Details = ({ buildingBlockId, query, onClose }: Props) => {
  const figure = query.buildingBlockById(buildingBlockId);
  if (!figure) {
    return null;
  }
  return (
    <DetailsContainer>
      <Headline>
        <h2>Details</h2>
      </Headline>
      <h2>{figure.bbName}</h2>
      {figure.id}
      <button onClick={onClose}>Close</button>
    </DetailsContainer>
  );
};

const Headline = styled.div`
  padding: 8px;
`;

const DetailsContainer = styled.div`
  display: flex;
  background: red;
  flex-direction: column;
  align-items: flex-star;
  justify-content: flex-start;
  right: 0;
  top: 0;
  height: 100%;
  position: absolute;
  width: 400px;
  background: white;
  z-index: 99999;
  border-radius: 5px;

  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
`;
