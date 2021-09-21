import { FeatureTypeFigure } from "../../../domain-editor/models/editor-core/feature-type-figure/FeatureTypeFigure";
import { BuildingBlockFigure } from "../../../domain-editor/models/editor-core/building-block-figure/BuildingBlockFigure";

export const getHorizontalAnchorByNumber = (
  startX: number,
  startWidth: number,
  endX: number,
  endWidth: number
) => {
  const startLeft = startX;
  const startRight = startX + startWidth;

  const midStart = startX + startWidth / 2;

  const endLeft = endX;

  if (Math.abs(midStart - endX) < startWidth / 2) {
    return midStart;
  }

  const targetIsRightSided = endLeft > startRight;
  if (targetIsRightSided) {
    return startRight;
  }
  return startLeft;
};

export const getHorizontalAnchor = (
  start: FeatureTypeFigure | BuildingBlockFigure,
  end: FeatureTypeFigure | BuildingBlockFigure
) => {
  return getHorizontalAnchorByNumber(start.x, start.width, end.x, end.width);
};

export const getVerticalAnchorByNumber = (
  startY: number,
  startHeight: number,
  endY: number,
  endheight: number
) => {
  const startTop = startY;
  const startBot = startY + startHeight;
  const midStart = startY + startHeight / 2;

  const endBot = endY - endheight;

  if (Math.abs(midStart - endY) < startHeight) {
    return midStart;
  }

  const targetIsTop = endBot < startTop;
  if (targetIsTop) {
    return startTop;
  }
  return startBot;
};

export const getVerticalAnchor = (
  start: FeatureTypeFigure | BuildingBlockFigure,
  end: FeatureTypeFigure | BuildingBlockFigure
) => {
  return getVerticalAnchorByNumber(start.y, start.height, end.y, end.height);
};
