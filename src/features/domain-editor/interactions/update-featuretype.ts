import * as R from "ramda";
import {
  FeatureTypeFigure,
  withName,
  withPosition,
} from "../models/editor-core/feature-type-figure/FeatureTypeFigure";

type Listener = {
  onFeatures: (featues: FeatureTypeFigure[]) => any;
  featureTypes: () => FeatureTypeFigure[];
};
export const createUpdateFeatureType = ({
  onFeatures,
  featureTypes,
}: Listener) => {
  const bbs = featureTypes();
  return {
    updateName: (bb: FeatureTypeFigure, newName: string) => {
      const b = bbs.findIndex((h) => h.id === bb.id);
      if (b === -1) {
        return bbs;
      }
      const result = R.adjust(b, (old) => withName(newName, old), bbs);
      onFeatures(result);
      return result;
    },
    updatePosition: (
      bb: FeatureTypeFigure,
      x: number,
      y: number
    ): FeatureTypeFigure[] => {
      const b = bbs.findIndex((h) => h.id === bb.id);
      if (b === -1) {
        return bbs;
      }
      const result = R.adjust(b, (old) => withPosition(x, y, old), bbs);
      onFeatures(result);
      return result;
    },
  };
};

export type UpdateFeatureType = ReturnType<typeof createUpdateFeatureType>;
