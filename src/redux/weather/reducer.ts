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

const fromKelvinToCelcius = (temp: number) => (temp - 32) * (5 / 9);

const reducer = createReducer<WeatherState>(initialWeatherState, (builder) => builder
  .addCase(getWeather.fulfilled, (state, action) => {
    // If performance is priority then don't do 2 seperate maps
    const weatherMains = action.payload.data.list.map((x) => x.main);
    const weatherObjects = action.payload.data.list.flatMap((x) => x.weather);

    state.weatherMains = weatherMains;
    state.weatherObjects = weatherObjects;
  }).addCase(getWeather.rejected, (state, action) => {
    state.error = action.error;
  }));

export default reducer;
