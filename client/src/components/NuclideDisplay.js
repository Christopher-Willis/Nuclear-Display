import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function ElementDisplay(props) {
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

  return (
    <Card style={{backgroundColor:bgColors[colorMap[props.data2.category]],filter:'brightness(120%) '}}>
      <CardContent>
        <Typography variant="h6" >
          {props.data.name}
        </Typography>
        <Typography color="textSecondary">
          {props.data.atomicMass}
        </Typography>
        <Typography component="p">
          {props.data.decayConstant}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  );
}
export default ElementDisplay;