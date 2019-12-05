import React, { Component } from 'react'
import TriggerButton from '../components/Modal/TriggerButton';
import { Modal, Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import Media from "react-media";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/modal';

class AddItem extends Component {

    state = { isShown: false,
         shifModal:false,
         left:50,
         top:50,
         isMobile: '',
         };

/**
 * change modal direction
 * use
 * */
   componentDidUpdate =(prevProps,prevState)=>{
       
       const {shifModal}=this.state
    if(prevState.shifModal!==this.state.shifModal){
        if(shifModal){
           return this.setState({left:80})
        }else{
            return this.setState({left:50})
        }
    }
   } 

      moveModal=()=>{
          this.setState(prevState =>({shifModal:!prevState.shifModal}))
      }
  showModal = () => {
    this.setState({ isShown: true }, () => {
    });
}

getModalStyle=()=> {
    const {top,left,shifModal}=this.state;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      transition:'0.3s',
    };
  }

onSubmit=()=>{}

closeModal = ()=>{
    this.setState({isShown:false})
}


render() {
    const {classes}= this.props;
    const {isMobile}= this.state;
    const {paper,mobileWidth,width,} = classes;
    const triggerText = 'Add Item';
    const form =(
        <div>
            <form onSubmit={this.onSubmit}>
            <div style={this.getModalStyle()} className={classNames(paper,isMobile? mobileWidth:width)}>
            <Input id="email"fullWidth name="email"   />
            <Input id="name" fullWidth name="name"   />
           {!isMobile  && <Button onClick={this.moveModal}>move</Button>}
            </div>
            </form>
        </div>
    )
    return (
      < React.Fragment>
       <Media query="(max-width: 992px)" onChange={matches => this.setState({isMobile: matches})}/>
        <TriggerButton 
        showModal={this.showModal}
        triggerText={triggerText}
        buttonRef={(n) => (this.TriggerButton = n)}
        outlined={this.props.outlined}
        />

          <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.isShown}
          onClose={this.closeModal}
          >
          {form}
          </Modal>
         
      </ React.Fragment>
    )
  }
}

AddItem.propTypes = {
    classes: PropTypes.object.isRequired,
    closeModal:PropTypes.func.isRequired,
    onSubmit:PropTypes.func.isRequired,

  };
export default withStyles(styles)(AddItem)
