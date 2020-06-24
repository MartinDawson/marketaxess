import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const createData = (name: string, value: number) => ({ name, value });

const rows = [
  createData('', 301.35),
  createData('', 298.61),
  createData('', 299.94),
  createData('', 301.35),
  createData('', 1019),
  createData('', 1020),
  createData('', 1017),
  createData('', 37),
];

const MainWeatherTable: FC = () => {
  const classes = useStyles();
  const;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Temperature (°C)</TableCell>
            <TableCell>Feels like</TableCell>
            <TableCell>Minimum Temperature (°C)</TableCell>
            <TableCell>Maximum Temperature (°C)</TableCell>
            <TableCell>Pressure</TableCell>
            <TableCell>Sea level</TableCell>
            <TableCell>Ground level</TableCell>
            <TableCell>Humidity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainWeatherTable;
