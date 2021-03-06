/* eslint-disable no-param-reassign */
import { createReducer, SerializedError } from '@reduxjs/toolkit';
import { getWeather } from './actions';
import { WeatherObject, WeatherMain } from '../../types';

export interface WeatherState {
  weatherObjects: WeatherObject[];
  weatherMains: WeatherMain[];
  error?: SerializedError;
}

const initialWeatherState = {
  weatherObjects: [],
  weatherMains: [],
};

const reducer = createReducer<WeatherState>(initialWeatherState, (builder) => builder
  .addCase(getWeather.fulfilled, (state, action) => {
    // Would be best to use normalizr usually but data has no unique id so not possible
    const weatherMains = action.payload.data.list.map((x) => x.main);
    const weatherObjects = action.payload.data.list.flatMap((x) => x.weather);

    state.weatherMains = weatherMains;
    state.weatherObjects = weatherObjects;
  }));

export default reducer;
