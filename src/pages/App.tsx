import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Albums from '../components/Albums';
import Details from '../components/Details';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <main className='container'>
        <Switch>
          <Route exact path='/' component={Albums} />
          <Route exact path='/:id/details' component={Details} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
