import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main } from './components/Main/Main';

import { Skills } from './components/Skills/Skills';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/skills" render={() => <Skills />} />
        {/* <Route path="/work" render={() => } />
        <Route path="/about" render={() => } />
        <Route path="/contact" render={() => } /> */}
      </Switch>
    </Router>
  );
}

export default App;
