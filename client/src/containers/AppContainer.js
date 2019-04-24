import App from "../App.js"
import { connect } from 'react-redux';
import {addNuclides,addElements} from "../actions"



const mapDispatchToProps = {
  addNuclde:addNuclides,
  addElement:addElements
}

function mapStateToProps(state){
  return {
    urlIsotopes:`${process.env.REACT_APP_API_URL}/isotopes`,
    urlElements:`${process.env.REACT_APP_API_URL}/elements`,
    allNuclides:state.nuclides,
    allElements:state.elements
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);