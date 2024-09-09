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
    const scrollProgressedPoint = currentScrollPoint - startPoint;
    const scrollProgressedRate =
      scrollProgressedPoint / (endPoint - startPoint);
    return defaultValue + (targetValue - defaultValue) * scrollProgressedRate;
  } else {
    if (currentScrollPoint < endPoint) {
      return defaultValue;
    }
    if (currentScrollPoint > startPoint) {
      return targetValue;
    }
  }
};
