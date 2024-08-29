type SrcollEffectParams = {
  currentScrollPoint: number;
  defaultValue: number;
  targetValue: number;
  startPoint: number;
  endPoint: number;
};

export const calculateScrollEffectValue = ({
  currentScrollPoint,
  defaultValue,
  targetValue,
  startPoint,
  endPoint,
}: SrcollEffectParams) => {
  if (currentScrollPoint >= startPoint && currentScrollPoint <= endPoint) {
    const effectStartPoint = currentScrollPoint - startPoint;
    const effectProgressPoint = effectStartPoint / (endPoint - startPoint);
    return defaultValue + (targetValue - defaultValue) * effectProgressPoint;
  } else {
    if (currentScrollPoint < endPoint) {
      return defaultValue;
    }
    if (currentScrollPoint > startPoint) {
      return targetValue;
    }
  }
  return defaultValue;
};
