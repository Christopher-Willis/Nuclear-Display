import PeriodicTable from "../components/PeriodicTableGrid.js"
import { connect } from 'react-redux';
import {selectElementIsotope} from "../actions"




function mapStateToProps(state){
  return {
    allElements:state.elements,
    chemPhySelected:state.chemPhySelected,
    theSelectedItem:state.selectedItem,
    allNuclides:state.nuclides
  }
}

const mapDispatchToProps = {
  selectedItem:selectElementIsotope,
}


export default connect(mapStateToProps,mapDispatchToProps)(PeriodicTable);