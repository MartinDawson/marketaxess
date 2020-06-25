/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducer';
import { WeatherObject } from '../types';
import StyledTableCell from './StyledTableCell';

const WeatherDataTable: FC = () => {
  const weatherObjects = useSelector<RootState, WeatherObject[]>((state) => state.weather.weatherObjects);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Main</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Icon</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weatherObjects.map((weatherObject, index) => (
            /* Change the key by adding a uid in reducer if sorting is needed */
            <TableRow key={index}>
              <StyledTableCell>{weatherObject.id}</StyledTableCell>
              <StyledTableCell>{weatherObject.main}</StyledTableCell>
              <StyledTableCell>{weatherObject.description}</StyledTableCell>
              <StyledTableCell>{weatherObject.icon}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherDataTable;
