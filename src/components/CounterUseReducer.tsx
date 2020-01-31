import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

type StateType = {
  count: number;
};

type ActionType = {
  type: 'reset' | 'decrement' | 'increment';
};

const initialState = { count: 0 };

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'decrement':
      return { count: state.count - 1 };
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

type Prop = {
  initialCount?: number;
};

const Counter: React.FC<Prop> = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });

  return (
    <section className='row my-5'>
      <article className='col-md-12'>
        <div className='card m-1 p-1 shadom'>
          <div className='card-header'>Featured</div>
          <div className='card-body'>
            <h5 className='card-title'>Count: {state.count}</h5>
            <button
              className='card-link'
              onClick={() => dispatch({ type: 'reset' })}
            >
              Reset
            </button>

            <button
              className='card-link'
              onClick={() => dispatch({ type: 'increment' })}
            >
              +
            </button>
            <button
              className='card-link'
              onClick={() => dispatch({ type: 'decrement' })}
            >
              -
            </button>
            <br />
            <br />
            <Link to={`/`} className='btn btn-primary'>
              Go To Albums
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Counter;
