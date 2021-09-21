import { BuildingBlockFigure } from "../models/editor-core/building-block-figure/BuildingBlockFigure";
import { DependencyRuleFigure } from "../models/editor-core/dependency-rule/DependencyRuleFigure";
import { NewDependencyRuleFigureId } from "../models/editor-core/dependency-rule/DependencyRuleFigureId";

type Listener = {
  onRules: (r: DependencyRuleFigure[]) => any;
  buildingBlocks: () => BuildingBlockFigure[];
  rules: () => DependencyRuleFigure[];
};
export const createPlaceDependencyRule =
  ({ onRules, buildingBlocks, rules }: Listener) =>
  (startBB: BuildingBlockFigure, endBB: BuildingBlockFigure) => {
    const start = buildingBlocks().find((b) => b.id === startBB.id);
    const end = buildingBlocks().find((b) => b.id === endBB.id);

    if (!start || !end) {
      return;
    }

    const findRule = rules().findIndex(
      (r) => r.from === startBB.id && r.to === endBB.id
    );
    if (findRule !== -1) {
      console.log("Rule does exist already");
      return;
    }

    const newRules = [
      ...rules(),
      DependencyRuleFigure({
        type: "DependencyRuleFigure",
        id: NewDependencyRuleFigureId(),
        from: start.id,
        to: end.id,
      }),
    ];
    onRules(newRules);
  };

export type PlaceDependencyRule = ReturnType<typeof createPlaceDependencyRule>;
