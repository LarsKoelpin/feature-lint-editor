import * as React from "react";
import { Group, Rect, Text } from "react-konva";
import { FeatureTypeFigure } from "../../../domain-editor/models/editor-core/feature-type-figure/FeatureTypeFigure";
import { getElementPos } from "../getPos";
import { UpdateFeatureType } from "../../../domain-editor/interactions/update-featuretype";
import { Html } from "react-konva-utils";
import { useRef, useState } from "react";

type Props = {
  figure: FeatureTypeFigure;
  updateFeatureType: UpdateFeatureType;
};
export const UiFeature = ({ figure, updateFeatureType }: Props) => {
  const [textEdit, setTextEdit] = useState<boolean>(false);
  const [posInfo, setPosInfo] = useState<any>({});
  const textNode = useRef<any>();

  const height = figure.height;
  const width = figure.width;
  return (
    <Group
      draggable={true}
      onDragMove={(e) => {
        const pos = getElementPos(e);
        updateFeatureType.updatePosition(figure, pos.x, pos.y);
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
              updateFeatureType.updateName(figure, e.target.value);
            }}
            ref={(ref) => ref?.focus()}
            style={{
              background: "red",
              position: "absolute",
              ...posInfo,
              height: height + "px",
            }}
          >
            {figure.name}
          </textarea>
        </Html>
      ) : null}
      <Text
        ref={textNode as any}
        preventDefault={true}
        listening={false}
        fill={"black"}
        wrap={"none"}
        align={"center"}
        verticalAlign="middle"
        width={200}
        height={50}
        text={figure.name}
        x={figure.x}
        y={figure.y}
        fontSize={20}
      />
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
        height={height}
        width={width}
        strokeWidth={5}
        stroke={"black"}
      />
    </Group>
  );
};
