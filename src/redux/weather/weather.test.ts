import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { WEATHER_ENDPOINT } from '../../api/weatherApi';
import { getWeatherMock } from '../../mocks/weatherMock';

const mock = new MockAdapter(axios);

mock.onGet(WEATHER_ENDPOINT).reply(200, getWeatherMock());

describe('redux/weather', () => {
  test('getWeather returns the weather when response is 200', async () => {

  });

  test('getWeather throws an error when response is not 200', async () => {

  });
});
