import React from 'react';
import RGL, { WidthProvider } from "react-grid-layout";


const ReactGridLayout = WidthProvider(RGL);


class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage

    return (
      <ReactGridLayout className="layout" cols={18} rowHeight={45} autoSize={true} >
        {this.props.allElements.map((element,index)=>{
          return <div key={index} data-grid={{x: element.xpos-1, y: element.ypos-1, w: 1, h: 1, static: true}}>{element.symbol}</div>
        })}
      </ReactGridLayout>
    )
  }
}

export default MyFirstGrid