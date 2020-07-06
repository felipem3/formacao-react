import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

import './index.css';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Livros from './pages/Livros/Livros';
import Autores from './pages/Autores/Autores';
import NotFound from './pages/NotFound/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Home}></Route>
      <Route path='/sobre' component={Sobre}></Route>
      <Route path='/livros' component={Livros}></Route>
      <Route path='/autores' component={Autores}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
