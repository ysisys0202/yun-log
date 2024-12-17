type ConvertSecondsParams = {
  hours?: number;
  minutes?: number;
  seconds?: number;
};

const convertSeconds = ({
  hours = 0,
  minutes = 0,
  seconds = 0,
}: ConvertSecondsParams): number => {
  if (!(seconds || minutes || hours)) {
    throw new Error(
      "seconds, minutes, hours 중 하나 이상의 값을 입력해 주세요 "
    );
  }
  return hours * 3600 + minutes * 60 + seconds;
};

export default convertSeconds;
