import { combineReducers } from 'redux';
import { SerializedError } from '@reduxjs/toolkit';
import weather, { WeatherState } from './weather/reducer';
import error from './error/reducer';

export interface RootState {
  weather: WeatherState;
  error: SerializedError;
}

export default combineReducers({
  weather,
  error,
});
