import React, { Dispatch } from 'react';
import { ActionTypes } from './types';

export interface StateType {
  count: number;
}

export interface ResetAction {
  type: ActionTypes.reset;
}
export interface DecrementAction {
  type: ActionTypes.decrement;
}
export interface IncrementAction {
  type: ActionTypes.increment;
}

export const reset = (dispatch: Dispatch<ResetAction>) => {
  dispatch({ type: ActionTypes.reset });
};

export const decrement = (dispatch: Dispatch<DecrementAction>) => {
  dispatch({ type: ActionTypes.decrement });
};

export const increment = (dispatch: Dispatch<IncrementAction>) => {
  dispatch({ type: ActionTypes.increment });
};
