import React, { FC } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useSelector } from 'react-redux';
import { SerializedError } from '@reduxjs/toolkit';
import { RootState } from '../redux/reducer';

const ErrorToast: FC = () => {
  // In real app log this error somewhere
  const error = useSelector<RootState, SerializedError>((state) => state.error);

  return (
    <>
      {error && (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Uh oh, something went wrong.
      </Alert>
      )}
    </>
  );
};

export default ErrorToast;
