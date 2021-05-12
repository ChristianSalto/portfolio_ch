import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main } from './components/Main/Main';
import { Skills } from './components/Skills/Skills';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/skills" render={() => <Skills />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" render={() => <Contact />} />
      </Switch>
    </Router>
  );
}

export default App;
