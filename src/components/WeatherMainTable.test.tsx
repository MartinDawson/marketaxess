import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { getWeather, WEATHER_ENDPOINT } from '../redux/weather/actions';
import { getWeatherMock } from '../mocks/weatherMock';
import StyledTableRow from './StyledTableRow';
import StyledTableCell from './StyledTableCell';
import formatTemperature from '../formatters/formatTemperature';
import WeatherMainTable from './WeatherMainTable';

const mock = new MockAdapter(axios);
const weatherMock = getWeatherMock();

mock.onGet(WEATHER_ENDPOINT).reply(200, weatherMock);

const setup = async () => {
  const wrapper = mount(<Provider store={store}><WeatherMainTable /></Provider>);

  await store.dispatch(getWeather());

  return { wrapper };
};

const getCellAt = (row: ReactWrapper, index: number) => row.find(StyledTableCell).at(index);

describe('WeatherMainTable', () => {
  it('renders the table data correctly in celcius format', async () => {
    const { wrapper } = await setup();

    wrapper.update();

    const rows = wrapper.find(StyledTableRow);
    const weatherMains = weatherMock.list.map((x) => x.main);

    rows.forEach((row, i) => {
      expect(getCellAt(row, 0).text()).toBe(formatTemperature(weatherMains[i].temp));
      expect(getCellAt(row, 1).text()).toBe(formatTemperature(weatherMains[i].feels_like));
      expect(getCellAt(row, 2).text()).toBe(formatTemperature(weatherMains[i].temp_min));
      expect(getCellAt(row, 3).text()).toBe(formatTemperature(weatherMains[i].temp_max));
      expect(getCellAt(row, 4).text()).toBe(weatherMains[i].pressure.toString());
      expect(getCellAt(row, 5).text()).toBe(weatherMains[i].sea_level.toString());
      expect(getCellAt(row, 6).text()).toBe(weatherMains[i].grnd_level.toString());
    });

    expect(rows).not.toHaveLength(0);
  });
});
