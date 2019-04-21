import App from "../App.js"
import { connect } from 'react-redux';
import {addNuclides} from "../actions"


const mapDispatchToProps = {
  addNuclde:addNuclides,
}

function mapStateToProps(state){
  return {
    url:"http://localhost:3002/isotope",
    allNuclides:state.nuclides
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);