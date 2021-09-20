import { DependencyRuleFigure } from "../dependency-rule/DependencyRuleFigure";
import { FeatureTypeFigure } from "../feature-type-figure/FeatureTypeFigure";
import { BuildingBlockFigure } from "../BuildingBlockFigure";

export type Figure =
  | DependencyRuleFigure
  | FeatureTypeFigure
  | BuildingBlockFigure;

export const isBuildingBlock = (f: Figure): f is BuildingBlockFigure => {
  return (f as any)?.type === "BuildingBlockFigure";
};
