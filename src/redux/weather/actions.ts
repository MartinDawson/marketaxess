/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { WEATHER_ENDPOINT } from '../../api/weatherApi';
import { Weather } from '../../types';

export const getWeather = createAsyncThunk('weater/getWeather', async () => {
  const response = await Axios.get<Weather>(WEATHER_ENDPOINT);

  return {
    payload: response.data,
  };
});
