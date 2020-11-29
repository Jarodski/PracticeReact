import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Home from './components/pages/Home'
import CountryList from './components/pages/CountryList'
import CountryDetails from './components/pages/CountryDetails'
import NASAspaceappsPractice from './components/pages/NASAspaceappsPractice'
import PostList from './components/pages/PostList'
import FormHandling from './components/pages/FormHandling'

import RandomUser from './components/testing1'
import NasaSat from './components/testing2'
import Chartex from './components/charttest'
import Practice1 from './components/practice1'
import CountUpAndDown from './components/CountUpAndDown'

import Navbar from './components/layout/Navbar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/countries" component={CountryList} />
            <Route exact path="/posts" component={PostList} />
            <Route exact path="/formhandling" component={FormHandling} />
            <Route path="/countries/:alpha3Code" component={CountryDetails} />
            <Route exact path="/nasaspaceappspractice" component={NASAspaceappsPractice} />
            <Route path="/randomUser" component={RandomUser} />
            <Route path="/nasaspaceappspractice/nasa" component={NasaSat} />
            <Route path="/nasaspaceappspractice/chart" component={Chartex} />
            <Route path="/nasaspaceappspractice/practice1" component={Practice1} />
            <Route path="/nasaspaceappspractice/countupanddown" component={CountUpAndDown} />
            <Route path='/external-link-stackoverflow' component={() => {
              window.location.href = 'https://stackoverflow.com/questions/42914666/react-router-external-link';
              return null;
            }} />
          </Switch>
        </Router>


      </div >
    )
  };

}

export default App;
