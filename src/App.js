import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper d-flex">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/top" component={() => <Body type="top" />} />
          <Route exact path="/latest" component={() => <Body type="new" />} />
          <Route exact path="/best" component={() => <Body type="best" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;