import PhysicsChemicalDisplay from "../components/PhysicsChemicalDisplay"
import { connect } from 'react-redux';




function mapStateToProps(state){
  return {
    allElements:state.elements,
    allIsotopes:state.nuclides,
    selectedItem:state.selectedItem,
    chemPhySelected:state.chemPhySelected
  }
}


export default connect(mapStateToProps)(PhysicsChemicalDisplay);