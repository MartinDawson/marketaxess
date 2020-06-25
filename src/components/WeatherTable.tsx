/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducer';
import { WeatherObject } from '../types';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const WeatherTable: FC = () => {
  const classes = useStyles();
  const weatherObjects = useSelector<RootState, WeatherObject[]>((state) => state.weather.weatherObjects);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Main</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Icon</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weatherObjects.map((weatherObject, index) => (
            /* Change the key by adding a uid in reducer if sorting is needed */
            <TableRow key={index}>
              <TableCell align="center">{weatherObject.id}</TableCell>
              <TableCell align="center">{weatherObject.main}</TableCell>
              <TableCell align="center">{weatherObject.description}</TableCell>
              <TableCell align="center">{weatherObject.icon}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherTable;
