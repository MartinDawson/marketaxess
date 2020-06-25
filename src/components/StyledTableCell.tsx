/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TableCell, withStyles } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#424242',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))((props) => <TableCell {...props} align="center" />);

export default StyledTableCell;
