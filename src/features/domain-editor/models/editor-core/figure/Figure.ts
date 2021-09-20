import { DependencyRuleFigure } from "../dependency-rule/DependencyRuleFigure";
import { FeatureTypeFigure } from "../feature-type-figure/FeatureTypeFigure";
import { BuildingBlockFigure } from "../building-block-figure/BuildingBlockFigure";
import * as zod from "zod";

export type Figure =
  | DependencyRuleFigure
  | FeatureTypeFigure
  | BuildingBlockFigure;

export const isBuildingBlock = (f: Figure): f is BuildingBlockFigure => {
  return (f as any)?.type === "BuildingBlockFigure";
};

export const isFeatureType = (f: Figure): f is FeatureTypeFigure => {
  return (f as any)?.type === "FeatureTypeFigure";
};

export const FigureSchema = {
  x: zod.number().positive(),
  y: zod.number().positive(),
  width: zod.number().positive(),
  height: zod.number().positive(),
  resizing: zod.boolean(),
};

export const withPosition = <T extends Figure>(x: number, y: number, bb: T) => {
  return { ...bb, x, y };
};

export const withResizing = <T extends Figure>(rez: boolean, bb: T): T => {
  if (isBuildingBlock(bb)) {
    return { ...bb, resizing: rez };
  }
  if (isFeatureType(bb)) {
    return { ...bb, resizing: rez };
  }
  return bb;
};

export const withSize = <T extends Figure>(
  width: number,
  height: number,
  bb: T
) => {
  return { ...bb, width, height };
};
