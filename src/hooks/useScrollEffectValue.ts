type SrcollEffectParams = {
  currentScrollPoint: number;
  defaultValue: number;
  targetValue: number;
  startPoint: number;
  endPoint: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

const useScrollEffectValue = () => {
  const calculateScrollEffectValue = ({
    currentScrollPoint,
    defaultValue,
    targetValue,
    startPoint,
    endPoint,
    setValue,
  }: SrcollEffectParams) => {
    if (currentScrollPoint < endPoint) {
      setValue(defaultValue);
    }
    if (currentScrollPoint > startPoint) {
      setValue(targetValue);
    }
    if (currentScrollPoint >= startPoint && currentScrollPoint <= endPoint) {
      const effectStartPoint = currentScrollPoint - startPoint;
      const effectProgressPoint = effectStartPoint / (endPoint - startPoint);
      setValue(
        defaultValue + (targetValue - defaultValue) * effectProgressPoint
      );
    }
  };

  return { calculateScrollEffectValue };
};

export default useScrollEffectValue;
