/* eslint-disable @typescript-eslint/no-unsafe-return */

import {
  createReducer, SerializedError,
} from '@reduxjs/toolkit';

const reducer = createReducer<SerializedError | null>(null, (builder) => builder
  .addDefaultCase(
    (_, action) => {
      if (action.error) {
        return action.error;
      }
      return null;
    },
  ));

export default reducer;
