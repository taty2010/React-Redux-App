import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import axios from 'axios'
import {connect} from 'react-redux';
import {callItem} from './actions/action';
import styled from 'styled-components';

import BrewList from './Components/list';
import Header from './Components/Header';
import {Route} from "react-router-dom";

import './App.css';

function App(props) {

  useEffect(() => {
    props.callItem()
    }, [])
  

  return (
    <div className="App">
      <Route exact path='/' component={Header} />
      <h1>TRENDING</h1>
      <BrewList breweries={props.breweries}/>
    </div>
  );
}

const mapStateToProps = state => ({
  breweries: state.breweries,
  error: state.error,
  isFetching: state.isFetching
})

export default connect (
  mapStateToProps,
  {callItem}
)(App);
