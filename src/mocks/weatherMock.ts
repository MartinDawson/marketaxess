/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/prefer-default-export */
import cloneDeep from 'lodash/cloneDeep';
import weather from './weather.json';
import { Weather } from '../types';

// @ts-ignore
export const getWeatherMock = () => cloneDeep<Weather>(weather);
