import { KonvaEventObject } from "konva/lib/Node";

export const getPos = (e: KonvaEventObject<any>): { x: number; y: number } => {
  const screenPos = e.target.getStage()?.getPointerPosition();
  if (screenPos?.x && screenPos.y) {
    return screenPos;
  }
  return { x: 0, y: 0 };
};

export const getElementPos = (
  e: KonvaEventObject<any>
): { x: number; y: number } => {
  const screenPos = e.target.position();
  if (screenPos?.x && screenPos.y) {
    return screenPos;
  }
  throw new Error("No element pos possible");
};
