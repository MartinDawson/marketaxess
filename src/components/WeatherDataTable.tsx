/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducer';
import { WeatherObject } from '../types';
import CenteredTableCell from './CenteredTableCell';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const WeatherDataTable: FC = () => {
  const classes = useStyles();
  const weatherObjects = useSelector<RootState, WeatherObject[]>((state) => state.weather.weatherObjects);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <CenteredTableCell>Id</CenteredTableCell>
            <CenteredTableCell>Main</CenteredTableCell>
            <CenteredTableCell>Description</CenteredTableCell>
            <CenteredTableCell>Icon</CenteredTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weatherObjects.map((weatherObject, index) => (
            /* Change the key by adding a uid in reducer if sorting is needed */
            <TableRow key={index}>
              <CenteredTableCell>{weatherObject.id}</CenteredTableCell>
              <CenteredTableCell>{weatherObject.main}</CenteredTableCell>
              <CenteredTableCell>{weatherObject.description}</CenteredTableCell>
              <CenteredTableCell>{weatherObject.icon}</CenteredTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherDataTable;
