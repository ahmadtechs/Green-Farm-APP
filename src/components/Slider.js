
import React, { Component } from 'react'
import Carousel from 'nuka-carousel';
import { styles } from '../styles/scss/custom';
import { withStyles } from '@material-ui/core';
import { Colors, Fonts } from '../styles/themes';

const {blue} = Colors
  
export class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          autoplay: true
        };
        this.state = {
          slideIndex:0,
        }
        
      }
      
      static sliderItems = [
        {'topic':'Salary', 'description':'Ea occaecat exercitation tempor anim est irure nisi.', 'img':require('../image/slide1.jpg')},
        {'topic':'Leave Management', 'description':'Ut ea adipisicing ut tempor incididunt veniam minim sunt ullamco sunt cupidatat non occaecat.', 'img':require('../image/slide2.jpg')},
        {'topic':'Loan Management', 'description':'Consectetur est minim occaecat amet aliqua.', 'img':require('../image/slide3.jpg')},
        {'topic':'Support', 'description':'Qui esse laborum in pariatur voluptate veniam aliquip Lorem non aliqua eiusmod aliqua proident id.', 'img':require('../image/slide3.jpg')},
        {'topic':'Gross Income', 'description':'Excepteur elit eiusmod sunt culpa officia nisi excepteur adipisicing.', 'img':require('../image/slide4.jpg')},
        {'topic':'Pension', 'description':'Sit culpa duis qui nostrud consectetur mollit commodo tempor duis ex Lorem excepteur nostrud nostrud.', 'img':require('../image/slide1.jpg')},
        {'topic':'Income & Tax', 'description':'Eu esse fugiat anim ad consectetur sit esse nisi laboris.', 'img':require('../image/slide2.jpg')}
       
        
      ]
      render() {
        const {classes} = this.props;
        return (
            <div >

             <Carousel  
             slideIndex={this.state.slideIndex}
             afterSlide={slideIndex =>{
                 if(slideIndex>=4) return this.setState({slideIndex:0})
                 this.setState({ slideIndex })} }
             renderCenterLeftControls={false} 
             renderCenterRightControls={false}
             renderBottomCenterControls={false}
             transitionMode={'fade'}
           width={260}
            autoplay={true}
          className="carousel"
           >
          {Slider.sliderItems.map((item, i)=>{
            return(
            <div className="caroItem" key={i+item.topic}>
            <img className="sliderContainer" style={{border:`2px solid ${blue}`}} width="250px" height="120px" src={item.img} alt={"image"+i}/>
            <h4 style={{fontFamily:Fonts.primary,color:blue}} className='slider-text-header'>{item.topic}</h4>
            <p className={classes.smallText}>{item.description}</p>
            </div>
            )
          })}

          </Carousel>
            </div>
        );
      }
    }
  
export default withStyles(styles)(Slider)
