import React, { Component } from 'react';
import Loader from 'react-loader-spinner'

class Spinner extends Component {
   constructor(props) {
      super(props)
      this.state = { timePassed: false, }
      
   }

static defaultProps = {
   color:"#00BFFF",
   width:'60',
   height:'60',
   className:"",
}
 

   render() {
     
    const {className,color,width,height} = this.props;
         return (
           <div className={`spinner-container ${ className }`}>
           <div className='loader'>
               <Loader
               type="Puff"
               color={color}
               height={height}
               width={width}
            />
            </div>
            {this.props.text ? <p>{this.props.text}</p> : null}
         </div>);
      }
   
}



export default Spinner
