import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { Alert, AlertTitle } from '@material-ui/lab';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import store from './redux/store';
import { WEATHER_ENDPOINT } from './redux/weather/actions';
import { getWeatherMock } from './mocks/weatherMock';
import ErrorToast from './components/ErrorToast';
import App from './App';

const mock = new MockAdapter(axios);

const setup = () => {
  const wrapper = mount(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>);

  return { wrapper };
};

describe('App', () => {
  it('does not render the error alert when their is no error', () => {
    const { wrapper } = setup();

    expect(wrapper.find(ErrorToast).text()).toBe('');
  });

  it('does render the error alert when an error occurs', async () => {
    mock.onGet(WEATHER_ENDPOINT).reply(500, getWeatherMock());

    const { wrapper } = setup();

    await act(async () => {
      await Promise.resolve(wrapper);
      await new Promise((resolve) => setImmediate(resolve));
      wrapper.update();
    });

    expect(wrapper.find(Alert).find(AlertTitle).text()).toBe('Error');
    expect(wrapper.find(Alert).text()).toContain('Uh oh, something went wrong.');
  });
});
