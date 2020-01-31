import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

import { reset, decrement, increment } from '../actions';
import { countReducer } from '../reducers';

type Prop = {
  initialCount?: number;
};

const Counter: React.FC<Prop> = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(countReducer, { count: initialCount });

  return (
    <section className='row my-5'>
      <article className='col-md-12'>
        <div className='card m-1 p-1 shadom'>
          <div className='card-header'>
            Featured with useReducer (like redux)
          </div>
          <div className='card-body'>
            <h5 className='card-title'>Count: {state.count}</h5>
            <button className='card-link' onClick={() => reset(dispatch)}>
              Reset
            </button>

            <button className='card-link' onClick={() => increment(dispatch)}>
              +
            </button>
            <button className='card-link' onClick={() => decrement(dispatch)}>
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
