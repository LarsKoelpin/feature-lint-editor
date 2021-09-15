import { useState } from "react";

import { FeatureTypeFigure } from "../../domain-editor/models/editor-core/feature-type-figure/FeatureTypeFigure";
import { BuildingBlockFigure } from "../../domain-editor/models/editor-core/BuildingBlockFigure";
import { DependencyRuleFigure } from "../../domain-editor/models/editor-core/dependency-rule/DependencyRuleFigure";

export const useDrawingState = () => {
  const [featureTypeFigures, setFeatureTypeFigures] = useState<
    FeatureTypeFigure[]
  >([]);
  const [buildingBlockFigures, setBuildingBlockFigures] = useState<
    BuildingBlockFigure[]
  >([]);
  const [rules, setRules] = useState<DependencyRuleFigure[]>([]);

  return {
    featureTypeFigures,
    setFeatureTypeFigures,
    buildingBlockFigures,
    setBuildingBlockFigures,
    rules,
    setRules,
  };
};

export type Figures = ReturnType<typeof useDrawingState>;
