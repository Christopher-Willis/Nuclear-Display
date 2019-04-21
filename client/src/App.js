import React, { Component } from 'react';
import NuclideDisplay from "./components/NuclideDisplay"
import './App.css';

class App extends Component {


  componentDidMount() {

    fetch(this.props.url)
    .then((response) =>{
      return response.json();
    })
    .then((nuclideObject) =>{
      nuclideObject.forEach( nuclideElement=> {
        this.props.addNuclde(nuclideElement)
      })
    });
  
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          header
        </header>
        <body className="inlineBlock">
          <div className="isotope-grid">{this.props.allNuclides.map((nuclide,index)=>{
            return <div className="isotope-container"  key={index}><NuclideDisplay data={nuclide}/></div>
            })}
          </div>
        </body>
      </div>
    );
  }
}

export default App;


