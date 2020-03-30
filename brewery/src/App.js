import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { callItem } from "./actions/action";
import {states} from './ListofStates'

import BrewList from "./Components/list";
import Header from "./Components/Header";
import { Route } from "react-router-dom";

import "./App.css";

function App(props) {
  const [search, setSearch] = useState("texas");

  useEffect(() => {
    if(search === ''){
       props.callItem(search);
    }else{props.callItem(searchItems)}
  }, [search]);

  const handleData = e => {
    e.preventDefault();
    props.callItem(search);
  };

  const handleChanges = e => {
    setSearch(e.target.value);
  };

  const handleChangesStates = e => {
    setUSStates(e.target.value);
  };

  console.log("search", search);

  return (
    <div className="App">
      <Route exact path="/" component={Header} />
      <h1>SEARCH</h1>
      <form onSubmit={handleData}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChanges}
        />
      </form>

      <select onChange={handleChangesStates}>
        {states.map(state => 
          <option value={state.name}>{state.name}</option>
        )}
        </select>
      {props.isFetching ? (
        <div className="loading">
          <i class="fas fa-beer" />
        </div>
      ) : (
        <BrewList states={USStates} search={search} callItem={props.callItem} breweries={props.breweries} />
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  breweries: state.breweries,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { callItem }
)(App);
