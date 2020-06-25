/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { TableCell } from '@material-ui/core';

const CenteredTableCell: FC = (props) => <TableCell {...props} align="center" />;

export default CenteredTableCell;
