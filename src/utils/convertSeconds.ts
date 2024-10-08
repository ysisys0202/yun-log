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
  return hours * 3600 + minutes * 60 + seconds;
};

export default convertSeconds;
