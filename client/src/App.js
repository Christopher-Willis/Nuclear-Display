import React, { Component } from 'react';
import './App.css';
import PeriodicTable from "./containers/PeriodicTableGridContainer"
import TopMenu from "./containers/TopMenuContainer"


  

class App extends Component {

  componentDidMount(){
  fetch(this.props.urlIsotopes)
    .then((response) =>{
      return response.json();
    })
    .then((nuclideObject) =>{
      this.props.addNuclde(nuclideObject)
  });
  // load all nuclear isotope data to redux

  fetch(this.props.urlElements)
  .then((response) =>{
    return response.json();
  })
  .then((elementObject) =>{
    this.props.addElement(elementObject)
  });

  // loads all element data to redux

  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopMenu/>
        </header>
        <PeriodicTable/>
      </div>
    );
  }
}

export default App;


