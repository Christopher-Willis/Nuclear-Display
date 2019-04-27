import IsotopeDialog from "../components/IsotopesDialog"
import { connect } from 'react-redux';
import {selectElementIsotope} from "../actions"




function mapStateToProps(state){
  return {

  }
}

const mapDispatchToProps = {
  selectedItem:selectElementIsotope,
}


export default connect(mapStateToProps,mapDispatchToProps)(IsotopeDialog);