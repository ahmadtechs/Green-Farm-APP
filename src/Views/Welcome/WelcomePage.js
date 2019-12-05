import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import classNames from 'classnames';
import { Grid, Grow } from '@material-ui/core';
import Slider from '../../components/Slider';
import Authentication from '../Authentication/Authentication';
import { Fonts, Colors } from '../../styles/themes';
import Media from "react-media";


// import classes from '*.module.scss';
const styles = {
    card: {
      flexGrow: 1,
      width: 700,
      maxHeight:370,
      justifyContent:'center',
      alignContent:'center',
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:16,
      paddingRight:18,
      overflow:'hidden',
    },
    cardMobile:{
      width: 300,
      maxHeight:'100%',
    },
    root: {
        flexGrow: 1,
      },
     
    

}
class WelcomePage extends Component {
  state={
    checked:true,
    isMobile:'',
  }
  render() {
    const { classes } = this.props;
    const {checked} = this.state;
    return (
      <div >
           <Media query="(max-width: 520px)" onChange={matches => this.setState({ isMobile: matches })
        } />
          <Grow {...(checked ? { timeout: 1000 } : {})} style={{transformOrigin: '0 0 0'}}  in={checked} >
          <Card className={classNames(classes.card,this.state.isMobile? classes.cardMobile:'')}>
        <Grid container spacing={12}>
        <Grid item xs={12}  sm={4}>
          <div className='sliderDiv'>
         <h4 className="slider-header" style={{fontFamily:Fonts.primary, color: '#00854D'}}>New in B&H</h4> 
         <div >
          <Slider/>
         </div>
          </div>
        </Grid>
        <Grid item xs={12}  sm={8}>
          <div className="AuthContainer" >
            <Authentication/>
          </div>
        </Grid>
        </Grid>
        </Card>
          </Grow>  
      </div>
    )
  }
}

export default (withStyles)(styles)(WelcomePage)
