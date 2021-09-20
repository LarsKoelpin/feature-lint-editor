import * as React from "react";
import styled from "styled-components";
import { MenuEntry } from "./MenuEntry";
import Icon from "@mdi/react";
import { mdiContentSave } from "@mdi/js";
import { ConvertToFeatureLintJson } from "../../../domain-converter/interactions/convertToFeatureLintJson";
import { useState } from "react";
import { SaveDialog } from "./save-dialog/SaveDialog";

type Props = {
  convertToJson: ConvertToFeatureLintJson;
};
export const TopBar = ({ convertToJson }: Props) => {
  const [featureLintConfig, setShowDialog] = useState<string>("");
  return (
    <TopContainer>
      {featureLintConfig ? (
        <SaveDialog text={featureLintConfig} close={() => setShowDialog("")} />
      ) : null}
      <MenuEntry
        active={false}
        onClick={() => {
          setShowDialog(JSON.stringify(convertToJson()));
        }}
      >
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
