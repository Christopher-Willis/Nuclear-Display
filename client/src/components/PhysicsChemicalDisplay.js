import React from 'react';
import ElementDisplay from "./ElementDisplay"
import NuclidesDisplay from "./NuclideDisplay"


let display = ""



class PhysChem extends React.Component {
  
    
  render() 
   { 
    if(this.props.selectedItem && this.props.chemPhySelected===0){
      const findElement = this.props.allElements.find( (element) => {
        return element.symbol === this.props.selectedItem; 
      })
      display=<ElementDisplay data={findElement}/>
    }else if (this.props.selectedItem && this.props.chemPhySelected===1){


      const findIsotope = this.props.allIsotopes.find( (isotope) => {

        return isotope.name.trim() === this.props.selectedItem.trim(); 
      })

      let elementName = ""
      if (findIsotope){
        elementName = findIsotope.name.replace(/[0-9]/g, '')
        if(elementName[0]=='m'){
          elementName=elementName.slice(1)
        }
      }

      const elementArrayFind = this.props.allElements.find( (element)=> {
        return elementName == element.symbol
      })

      
      display=(findIsotope ? <NuclidesDisplay data2={elementArrayFind} data={findIsotope}/> : "")
    }
    return (
      <div>
        {display}
      </div>
    )
  }
}


export default PhysChem