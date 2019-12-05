import React, { Component } from 'react'
import CompleteSignup from './CompleteSignup';
import { Slide } from '@material-ui/core';


export class AuthCompleteContainer extends Component {
  state={
    roll:true,
  }
  render() {
    return (
      <div className="conpleteContainer">
      <Slide {...(this.state.roll ? { timeout: 750 } : {})} direction='right' in={this.state.roll}>
        <CompleteSignup/>
      </Slide>
      </div>
    )
  }
}

export default AuthCompleteContainer
