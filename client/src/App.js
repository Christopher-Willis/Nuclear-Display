import React, { Component } from 'react';
import NuclideDisplay from "./components/NuclideDisplay"
import './App.css';


  

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
    let display ="";
    if(this.props.allNuclides && this.props.allElements<100){
      display=<div>Loading: {this.props.allElements.length} of 1481</div>
    }else if (this.props.allNuclides){
      display=<div className="isotope-grid">{this.props.allElements.map((element,index)=>{
        return <div className="isotope-container"  key={index}><NuclideDisplay data={element}/></div>
        })}
      </div>
    }
    return (
      <div className="App">
        <header className="App-header">
          header
        </header>
        <body className="inlineBlock">
          {display}
        </body>
      </div>
    );
  }
}

export default App;


