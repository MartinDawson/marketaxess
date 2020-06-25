import React, { FC, useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import {
  Route,
  Link as RouterLink,
} from 'react-router-dom';
import { Button, Box } from '@material-ui/core';
import { getWeather } from './redux/weather/actions';
import WeatherDataTable from './components/WeatherDataTable';
import WeatherMainTable from './components/WeatherMainTable';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <div className="App">
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button component={RouterLink} color="primary" to="/weather">Weather</Button>
        <Button component={RouterLink} color="primary" to="/weatherData">Weather Data</Button>
      </Box>
      <Route exact path="/weather" component={WeatherMainTable} />
      <Route exact path="/weatherData" component={WeatherDataTable} />
    </div>
  );
};
export default App;
