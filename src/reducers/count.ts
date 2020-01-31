import { StateType, Action, ActionTypes } from '../actions';

const initialState = { count: 0 };

export const countReducer = (
  state: StateType = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.reset:
      return initialState;
    case ActionTypes.decrement:
      return { count: state.count - 1 };
    case ActionTypes.increment:
      return { count: state.count + 1 };
    default:
      return state;
  }
};
