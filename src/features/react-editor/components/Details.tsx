import * as React from "react";
import styled from "styled-components";
import { QueryFigures } from "../../domain-editor/interactions/query-figures";
import { BuildingBlockDetails } from "./figure-details/BuildingBlockDetails";

type Props = {
  figureId: string;
  query: QueryFigures;
  onClose: () => any;
};
export const Details = ({ figureId, query, onClose }: Props) => {
  const figure = query.figureById(figureId);
  if (!figure) {
    return null;
  }
  return (
    <DetailsContainer>
      <Headline>
        <h2>Details</h2>
      </Headline>
      {(() => {
        switch (figure.type) {
          case "BuildingBlockFigure":
            return <BuildingBlockDetails figure={figure} onClose={onClose} />;
          case "FeatureFigure":
            return <div>Hello</div>;
        }
      })()}
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
