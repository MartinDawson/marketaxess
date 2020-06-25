/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { WeatherMain } from '../types';
import { RootState } from '../redux/reducer';
import StyledTableCell from './StyledTableCell';
import StyledTableRow from './StyledTableRow';

const WeatherMainTable: React.FC = () => {
  const weatherMains = useSelector<RootState, WeatherMain[]>((state) => state.weather.weatherMains);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Temperature (°C)</StyledTableCell>
            <StyledTableCell>Feels Like (°C)</StyledTableCell>
            <StyledTableCell>Temperature Min (°C)</StyledTableCell>
            <StyledTableCell>Temperature Max (°C)</StyledTableCell>
            <StyledTableCell>Pressure</StyledTableCell>
            <StyledTableCell>Sea Level</StyledTableCell>
            <StyledTableCell>Ground Level</StyledTableCell>
            <StyledTableCell>Humidity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weatherMains.map((weatherMain, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{weatherMain.temp}</StyledTableCell>
              <StyledTableCell>{weatherMain.feels_like}</StyledTableCell>
              <StyledTableCell>{weatherMain.temp_min}</StyledTableCell>
              <StyledTableCell>{weatherMain.temp_max}</StyledTableCell>
              <StyledTableCell>{weatherMain.pressure}</StyledTableCell>
              <StyledTableCell>{weatherMain.sea_level}</StyledTableCell>
              <StyledTableCell>{weatherMain.grnd_level}</StyledTableCell>
              <StyledTableCell>{weatherMain.humidity}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherMainTable;
