import * as React from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import {
  mdiCursorDefault,
  mdiHexagon,
  mdiHexagonMultipleOutline,
  mdiRelationManyToOne,
} from "@mdi/js";
import { ToolState } from "../../controllers/useToolState";
import { Tool } from "../../../domain-editor/models/editor-core/Tool";
import { MenuEntry } from "./MenuEntry";

type Props = {
  tool: ToolState;
  selectTool: (t: Tool) => any;
};
const ICON_SIZE = 1.1;
export const ToolBar = ({ tool, selectTool }: Props) => {
  return (
    <SidebarContainer>
      <MenuEntry
        active={tool.currentTool.type === "SELECTION"}
        onClick={() => selectTool(Tool({ type: "SELECTION" }))}
      >
        <Icon path={mdiCursorDefault} size={ICON_SIZE} color="grey" />
        Select
      </MenuEntry>
      <MenuEntry
        active={tool.currentTool.type === "PLACE_FEATURE"}
        onClick={() => selectTool(Tool({ type: "PLACE_FEATURE" }))}
      >
        <Icon path={mdiHexagon} size={ICON_SIZE} color="grey" />
        Feature Type
      </MenuEntry>
      <MenuEntry
        active={tool.currentTool.type === "PLACE_BUILDING_BLOCK"}
        onClick={() => selectTool(Tool({ type: "PLACE_BUILDING_BLOCK" }))}
      >
        <Icon path={mdiHexagonMultipleOutline} size={ICON_SIZE} color="grey" />
        Building Block
      </MenuEntry>
      <MenuEntry
        active={tool.currentTool.type === "PLACE_RULE"}
        onClick={() =>
          selectTool(Tool({ type: "PLACE_RULE", from: null, to: null }))
        }
      >
        <Icon path={mdiRelationManyToOne} size={ICON_SIZE} color="grey" />
        Allow Import
      </MenuEntry>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: centeR;
  justify-content: flex-start;
  left: 8px;
  top: 30%;
  position: absolute;
  width: 64px;
  background: white;
  z-index: 99999;
  border-radius: 5px;

  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
`;
