import fromKelvinToCelcius from '../util/kelvinToCelcius';

const formatTemperature = (number: number): string => {
  const celciusTemperature = fromKelvinToCelcius(number);

  return celciusTemperature.toFixed(2);
};

export default formatTemperature;
