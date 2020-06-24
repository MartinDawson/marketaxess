/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { Weather } from '../../types';

export const WEATHER_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=416f21735638892910fc788dbd92dc24';

export const getWeather = createAsyncThunk('weater/getWeather', async () => {
  const { data } = await Axios.get<Weather>(WEATHER_ENDPOINT);

  return {
    data,
  };
});
