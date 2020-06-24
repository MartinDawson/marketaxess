/* eslint-disable no-param-reassign */
import { createReducer, SerializedError } from '@reduxjs/toolkit';
import { getWeather } from './actions';
import { Weather } from '../../types';

interface IWeatherState {
  data?: Weather;
  error?: SerializedError;
}

const initialWeatherState = {};

const fromKelvinToCelcius = (temp: number) => (temp - 32) * (5 / 9);

const reducer = createReducer<IWeatherState>(initialWeatherState, (builder) => builder
  .addCase(getWeather.fulfilled, (state, action) => {
    state.data = action.payload.data;
  }).addCase(getWeather.rejected, (state, action) => {
    state.error = action.error;
  }));

export default reducer;
