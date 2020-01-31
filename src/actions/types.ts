import {
  StateType,
  ResetAction,
  DecrementAction,
  IncrementAction
} from './count';

export enum ActionTypes {
  reset,
  decrement,
  increment
}

export type Action = ResetAction | DecrementAction | IncrementAction;
