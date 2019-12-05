import React from 'react'
import { Button } from '../../../mui';


const TriggerButton =({triggerText, buttonRef, showModal,className, outlined}) => {
  return (
    <Button onClick={showModal} ref={buttonRef} variant={outlined? 'outlined':'text'} className={className}>{triggerText}</Button>
  )
}


export default TriggerButton;