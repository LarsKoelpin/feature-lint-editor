export type GeometryRect = {
  left: number;
  right: number;
  top: number;
  bottom: number;
};

export const toGeometryRect = (f: {
  x: number;
  y: number;
  width: number;
  height: number;
}) => {
  return {
    top: f.y,
    bottom: f.y + f.height,
    left: f.x,
    right: f.x + f.width,
  };
};

export const intersectRect = (
  big: GeometryRect,
  small: GeometryRect
): boolean => {
  return !(
    small.left > big.right ||
    small.right < big.left ||
    small.top > big.bottom ||
    small.bottom < big.top
  );
};
