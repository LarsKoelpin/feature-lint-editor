import * as React from "react";
import { Text, Rect, Group } from "react-konva";
import { Html } from "react-konva-utils";
import { BuildingBlockFigure } from "../../../domain-editor/models/editor-core/BuildingBlockFigure";
import { getElementPos } from "../getPos";
import { UpdateBuildingBlock } from "../../../domain-editor/interactions/update-buildingblock";
import { useRef, useState } from "react";
import Icon from "@mdi/react";
import { mdiCog } from "@mdi/js";
import { SelectionAction } from "../../../domain-editor/interactions/building-block-selection";

type Props = {
  figure: BuildingBlockFigure;
  onSelect: SelectionAction;
  updateBuildingBlock: UpdateBuildingBlock;
};
export const UiBuildingBlockFigure = ({
  figure,
  onSelect,
  updateBuildingBlock,
}: Props) => {
  const [textEdit, setTextEdit] = useState<boolean>(false);
  const [posInfo, setPosInfo] = useState<any>({});
  const textNode = useRef<any>();
  const width = figure.width;
  const height = figure.height;

  const iconSize = 42;
  const fontSize = 20;
  const offset = height / fontSize;
  const color = textEdit ? "green" : "red";
  return (
    <>
      <Group
        draggable={true}
        onDragEnd={(e) => {
          const pos = getElementPos(e);
          updateBuildingBlock.updatePosition(figure, pos.x, pos.y);
        }}
        onDragMove={(e) => {
          const pos = getElementPos(e);
          updateBuildingBlock.updatePosition(figure, pos.x, pos.y);
        }}
        onClick={(e) => {
          onSelect(figure, "BLOCK");
        }}
      >
        {textEdit ? (
          <Html>
            <textarea
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  setTextEdit(false);
                }
              }}
              onChange={(e) => {
                updateBuildingBlock.updateName(figure, e.target.value);
              }}
              ref={(ref) => ref?.focus()}
              style={{
                background: "red",
                position: "absolute",
                ...posInfo,
                height: height + "px",
              }}
            >
              {figure.bbName}
            </textarea>
          </Html>
        ) : null}
        <Rect
          onDblClick={(event) => {
            setTextEdit(!textEdit);
            const textPosition = textNode.current!.getAbsolutePosition();
            const stage = event.currentTarget.getStage();
            const stageBox = stage!.container().getBoundingClientRect();
            const areaPosition = {
              x: stageBox.left + textPosition.x,
              y: stageBox.top + textPosition.y,
            };
            setPosInfo({
              top: areaPosition.y + "px",
              left: areaPosition.x + "px",
              width: width + "px",
            });
          }}
          draggable
          x={figure.x}
          y={figure.y}
          width={width}
          height={height}
          stroke={color}
        />
        <Text
          preventDefault={true}
          ref={textNode as any}
          listening={false}
          fill={color}
          wrap={"none"}
          align={"center"}
          verticalAlign="middle"
          width={width}
          height={height}
          text={figure.bbName}
          x={figure.x}
          y={figure.y + offset / 2}
          fontSize={fontSize}
        />
      </Group>
      <Html
        groupProps={{
          x: figure.x + figure.width - iconSize,
          y: figure.y,
          fill: "red",
          width: iconSize,
          height: iconSize,
        }}
      >
        <div
          style={{
            width: iconSize,
            height: iconSize,
            padding: "8px",
            boxSizing: "border-box",
          }}
          onClick={() => onSelect(figure, "ICON")}
        >
          <Icon path={mdiCog} size={1.2} />
        </div>
      </Html>
    </>
  );
};
