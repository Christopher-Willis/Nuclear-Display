
import { connect } from 'react-redux';
import {changeMenuChemPhys} from "../actions"
import TopMenu from "../components/TopMenu"



const mapDispatchToProps = {
  setMenuIndex:changeMenuChemPhys
}

function mapStateToProps(state){
  return {
    selectedIndex:state.chemPhySelected
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(TopMenu);