import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import './index.css';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Jobs from './components/Jobs/Jobs';
import Services from './components/Services/Services';
import windInfo from './components/Info/windInfo';


const routing = (
    <Router>
    <div>
    <Header></Header>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/info" component={Info} />
        <Route path="/products" component={Products} />
        <Route path="/jobs" component={Jobs}/>
        <Route path="/services" component={Services}/>
        <Route path="/windInfo" component={windInfo} />
      </Switch>
        <Footer></Footer>
        </div>
    </Router>
  )
  


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
