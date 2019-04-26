import PeriodicTable from "../components/PeriodicTableGrid.js"
import { connect } from 'react-redux';




function mapStateToProps(state){
  return {
    allElements:state.elements
  }
}


export default connect(mapStateToProps)(PeriodicTable);