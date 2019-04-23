import App from "../App.js"
import { connect } from 'react-redux';
import {addNuclides,addElements} from "../actions"


const mapDispatchToProps = {
  addNuclde:addNuclides,
  addElement:addElements
}

function mapStateToProps(state){
  return {
    urlIsotopes:"http://localhost:3002/isotopes",
    urlElements:"http://localhost:3002/elements",
    allNuclides:state.nuclides,
    allElements:state.elements
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);