import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { Alert, AlertTitle } from '@material-ui/lab';
import store from '../redux/store';
import ErrorToast from './ErrorToast';
import { getWeather, WEATHER_ENDPOINT } from '../redux/weather/actions';

const mock = new MockAdapter(axios);

const setup = async () => {
  const wrapper = mount(<Provider store={store}><ErrorToast /></Provider>);

  await store.dispatch(getWeather());

  return { wrapper };
};

describe('ErrorToast', () => {
  it('does not render the error alert when their is no error', async () => {
    const { wrapper } = await setup();

    expect(wrapper.text()).toBe('');
  });

  it('does render the error alert when an error occurs', async () => {
    mock.onGet(WEATHER_ENDPOINT).reply(500);

    const { wrapper } = await setup();

    expect(wrapper.find(Alert).find(AlertTitle).text()).toBe('Error');
    expect(wrapper.find(Alert).text()).toContain('Uh oh, something went wrong.');
  });
});
