import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { getWeather, WEATHER_ENDPOINT } from '../redux/weather/actions';
import { getWeatherMock } from '../mocks/weatherMock';
import WeatherDataTable from './WeatherDataTable';
import StyledTableRow from './StyledTableRow';
import StyledTableCell from './StyledTableCell';

const mock = new MockAdapter(axios);
const weatherMock = getWeatherMock();

mock.onGet(WEATHER_ENDPOINT).reply(200, weatherMock);

const setup = async () => {
  const wrapper = mount(<Provider store={store}><WeatherDataTable /></Provider>);

  await store.dispatch(getWeather());

  return { wrapper };
};

const getCellAt = (row: ReactWrapper, index: number) => row.find(StyledTableCell).at(index);

describe('WeatherDataTable', () => {
  it('renders the table data correctly', async () => {
    const { wrapper } = await setup();

    wrapper.update();

    const rows = wrapper.find(StyledTableRow);
    const weatherObjectsMock = weatherMock.list.flatMap((x) => x.weather);

    rows.forEach((row, i) => {
      expect(getCellAt(row, 0).text()).toBe(weatherObjectsMock[i].id.toString());
      expect(getCellAt(row, 1).text()).toBe(weatherObjectsMock[i].main.toString());
      expect(getCellAt(row, 2).text()).toBe(weatherObjectsMock[i].description.toString());
      expect(getCellAt(row, 3).text()).toBe(weatherObjectsMock[i].icon.toString());
    });

    expect(rows).not.toHaveLength(0);
  });
});
