import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';


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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class SimpleModal extends React.Component {



  clickHandeler = (isotope) => {
    this.props.selectedItem(isotope.name)
    this.props.close()
  }


  render() {
    const { classes } = this.props;
    let filteredArray = []
    if(this.props.thingArray){
      filteredArray = this.props.thingArray.filter((isotope,index) => {
        let isotpesFormated = isotope.name.replace(/[0-9]/g, '')
        if(isotpesFormated[0]=='m'){
          isotpesFormated=isotpesFormated.slice(1)
        }
        return isotpesFormated === this.props.element
        // return isotope.name.replace(/[0-9]/g, ''))

      })
    }
    

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.close}
        >
          <div style={getModalStyle()} className={classes.paper}>
            {filteredArray.map((isotope,index)=>{
              return <div key={index} style={{backgroundColor: "#009A5A",display:"inline-block",width:"fit-content",margin:"5px",padding:"4px"}}>
                <Fab onClick={()=>this.clickHandeler(isotope)}>{isotope.name}</Fab>
              </div>
            })
            }
            {/* <div style={{backgroundColor: bgColors[colorMap[element.category]],display:"flex",alignItems:"center",justifyContent: "center"}} key={index} data-grid={{x: element.xpos-1, y: element.ypos-1, w: 1, h: 1, static: true}}>
              <Fab onClick={() => this.clickHandeler(element.symbol)} style={{backgroundColor: bgColors[colorMap[element.category]],filter: 'brightness(120%)',filter:'hue-rotate(15deg)'}} size="small">{element.symbol}</Fab>
            </div> */}
          </div>
        </Modal>
      </div>
    );
  }
}


// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;