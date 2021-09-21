import * as React from "react";
import { Text, Rect, Group, Transformer } from "react-konva";
import { Html } from "react-konva-utils";
import { BuildingBlockFigure } from "../../../domain-editor/models/editor-core/building-block-figure/BuildingBlockFigure";
import { getElementPos } from "../getPos";
import { useRef, useState } from "react";
import Icon from "@mdi/react";
import { mdiCog } from "@mdi/js";
import { UpdateFigure } from "../../../domain-editor/interactions/update-figure";
import { SelectionAction } from "../../../domain-editor/interactions/tool-interactions";

type Props = {
  figure: BuildingBlockFigure;
  onSelect: SelectionAction;
  updateFigure: UpdateFigure;
};
export const UiBuildingBlockFigure = ({
  figure,
  onSelect,
  updateFigure,
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

  const shapeRef = React.useRef();
  const trRef = React.useRef<any>();

  const resizing = figure.resizing;
  React.useEffect(() => {
    if (resizing) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [resizing]);

  return (
    <>
      {figure.resizing && (
        <Transformer
          rotateEnabled={false}
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
      <Group
        draggable={true}
        onDragEnd={(e) => {
          const pos = getElementPos(e);
          updateFigure.updatePosition(figure, pos.x, pos.y);
        }}
        onDragMove={(e) => {
          const pos = getElementPos(e);
          updateFigure.updatePosition(figure, pos.x, pos.y);
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
                  console.log("ENTER");
                  const node: any = shapeRef.current;
                  const scaleX = node!.scaleX();
                  const scaleY = node!.scaleY();

                  // we will reset it back
                  node.scaleX(1);
                  node.scaleY(1);
                  updateFigure.updateShape(
                    figure,
                    Math.max(5, node.width() * scaleX),
                    Math.max(node.height() * scaleY)
                  );
                }
              }}
              onChange={(e) => {
                updateFigure.updateBuildingBlockName(figure, e.target.value);
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
          onTransformEnd={() => {
            console.log("END");
            const node: any = shapeRef.current;
            const scaleX = node!.scaleX();
            const scaleY = node!.scaleY();

            // we will reset it back
            node.scaleX(1);
            node.scaleY(1);
            updateFigure.updateShape(
              figure,
              Math.max(5, node.width() * scaleX),
              Math.max(node.height() * scaleY)
            );
          }}
          ref={shapeRef as any}
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
