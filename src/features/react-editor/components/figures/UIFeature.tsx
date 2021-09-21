import * as React from "react";
import { Group, Rect, Text, Transformer } from "react-konva";
import { FeatureTypeFigure } from "../../../domain-editor/models/editor-core/feature-type-figure/FeatureTypeFigure";
import { getElementPos } from "../getPos";
import { Html } from "react-konva-utils";
import { useRef, useState } from "react";
import { mdiCog } from "@mdi/js";
import Icon from "@mdi/react";
import { UpdateFigure } from "../../../domain-editor/interactions/update-figure";
import { SelectionAction } from "../../../domain-editor/interactions/tool-interactions";

type Props = {
  figure: FeatureTypeFigure;
  onSelect: SelectionAction;
  updateFigure: UpdateFigure;
};
export const UiFeature = ({ figure, updateFigure, onSelect }: Props) => {
  const [textEdit, setTextEdit] = useState<boolean>(false);
  const [posInfo, setPosInfo] = useState<any>({});
  const textNode = useRef<any>();

  const height = figure.height;
  const width = figure.width;

  const iconSize = 42;

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
        onDragMove={(e) => {
          const pos = getElementPos(e);
          updateFigure.updatePosition(figure, pos.x, pos.y);
        }}
      >
        {textEdit ? (
          <Html>
            <textarea
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  setTextEdit(false);
                  console.log("END FEAT TRANS");
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
                updateFigure.updateFeatureTypeName(figure, e.target.value);
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
          onTransformEnd={() => {
            console.log("END FEAT TRANS");
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
          onClick={() => onSelect(figure, "BLOCK")}
          x={figure.x}
          y={figure.y}
          height={height}
          width={width}
          strokeWidth={5}
          stroke={"black"}
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
