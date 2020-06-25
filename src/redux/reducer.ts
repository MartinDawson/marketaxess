import { combineReducers } from 'redux';
import weather, { WeatherState } from './weather/reducer';

export interface RootState {
  weather: WeatherState;
}

export default combineReducers({
  weather,
});
