import React from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
import Fab from '@material-ui/core/Fab';
import PhyChemDisplay from "../containers/PhysicsChemicalDisplayContainer"
import IsotopesDialog from "../containers/IsotopesDialogContainer"


const ReactGridLayout = WidthProvider(RGL);

const bgColors = { 
  "Default": "#81b71a",
  "Green": "#009A5A",
  "Light Green": "#C3DFA4",
  "Light Blue": "#17BED0",
  "Pink Red": "#ED1A3B",
  "Blue": "#0065B3",
  "Pale Green":"#C3DFA4",
  "Purple":"#522E92",
  "Yellow":"#FFCB05",
  "Hot Pink":"#EE3D97",
  "Light Pink":"#E1C1CC",
  "Deep Green":"#A5CE42",
  "Salmon":"#FDDCB1"
};

const colorMap = {
  'diatomic nonmetal': 'Pale Green',
  'alkali metal':'Green',
  'polyatomic nonmetal':"Light Green",
  'metalloid': "Light Blue",
  'noble gas': "Pink Red",
  'alkaline earth metal': 'Blue',
  'transition metal': "Purple",
  'post-transition metal':'Yellow',
  'lanthanide':"Hot Pink",
  "actinide":"Light Pink",
  'unknown, probably transition metal':"Deep Green",
  'unknown, predicted to be noble gas':"Deep Green",
  "unknown, probably metalloid":"Deep Green",
  "unknown, probably post-transition metal":"Deep Green",
  "unknown, but predicted to be an alkali metal":"Deep Green",
  "unknown, probably metallic":"Deep Green",
  'halogen':"Salmon"
}

// bgColors[colorMap[element.type]]
// style={{backgroundColor: ()}}



class MyFirstGrid extends React.Component {
  state = {
    open: false,
  };
  clickHandeler(symbol){
    this.props.selectedItem(symbol)
    if(this.props.chemPhySelected==1){
      this.setState({
        open: true,
      });
    }
  }
  handleClose = () => {
    this.setState({ open: false });
  };

  
  
  
  render() {
    // layout is an array of objects, see the demo for more complete usage

    //react grid layout should be in app and things should be rending it that grid 

    return (
      <div>
        <ReactGridLayout className="layout" cols={18} rowHeight={48} >
          <div key="selector" data-grid={{x:3, y: 0, w: 5, h: 3,static: true}}><PhyChemDisplay/></div>
          {this.props.allElements.map((element,index)=>{
            return <div style={{backgroundColor: bgColors[colorMap[element.category]],display:"flex",alignItems:"center",justifyContent: "center"}} key={index} data-grid={{x: element.xpos-1, y: element.ypos-1, w: 1, h: 1, static: true}}>
              <Fab onClick={() => this.clickHandeler(element.symbol)} style={{backgroundColor: bgColors[colorMap[element.category]],filter: 'brightness(120%)',filter:'hue-rotate(15deg)'}} size="small">{element.symbol}</Fab>
            </div>
          })}
        </ReactGridLayout>
        <IsotopesDialog open={this.state.open} close={this.handleClose} element={this.props.theSelectedItem} thingArray={this.props.allNuclides}/>
      </div>
      
    )
  }
}

export default MyFirstGrid