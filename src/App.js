import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main } from './components/Main/Main';
import { Skills } from './components/Skills/Skills';
import { Works } from './components/Works/Works';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/skills" render={() => <Skills />} />
        <Route path="/works" render={() => <Works />} />
        {/* 
        <Route path="/about" render={() => } />
        <Route path="/contact" render={() => } /> */}
      </Switch>
    </Router>
  );
}

export default App;
