import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';


function NuclideDisplay(props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="Isotope Abbreviation">
            {props.data.symbol}
          </Avatar>
        }
        title={props.data.name}
        subheader={props.data.summary}
      />
    </Card>
    
  );
}
export default NuclideDisplay;