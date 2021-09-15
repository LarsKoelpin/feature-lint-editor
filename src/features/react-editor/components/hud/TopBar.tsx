import * as React from "react";
import styled from "styled-components";
import { MenuEntry } from "./MenuEntry";
import Icon from "@mdi/react";
import { mdiContentSave, mdiUpload } from "@mdi/js";
import { ConvertToFeatureLintJson } from "../../../domain-converter/interactions/convertToFeatureLintJson";

type Props = {
  convertToJson: ConvertToFeatureLintJson;
};
export const TopBar = ({ convertToJson }: Props) => {
  return (
    <TopContainer>
      <MenuEntry active={false} onClick={convertToJson}>
        <Icon path={mdiUpload} size={1.1} color="grey" />
        Load
      </MenuEntry>
      <MenuEntry active={false}>
        <Icon path={mdiContentSave} size={1.1} color="grey" />
        Save
      </MenuEntry>
    </TopContainer>
  );
};

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  left: 50%;
  top: 0;
  position: absolute;
  height: 64px;
  min-width: 200px;
  background: white;
  z-index: 99999;
  border-radius: 5px;

  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
`;
