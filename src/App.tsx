import React, { FC, useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { getWeather } from './redux/weather/actions';
import WeatherTable from './components/WeatherTable';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <div className="App">
      <WeatherTable />
    </div>
  );
};
export default App;
