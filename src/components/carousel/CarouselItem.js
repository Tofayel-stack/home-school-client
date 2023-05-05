import React from 'react';
import brand1 from '../Assets/brand1.jpg';
import brand2 from '../Assets/brand2.jpg'




import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
 


const CarouselItem = () => {
    return (
     
      <AwesomeSlider
      animation="foldOutAnimation"
      cssModule={[CoreStyles, AnimationStyles]}
    >
      <div data-src={brand1} />
      <div data-src={brand2} />
      <div data-src="https://ce.ccsu.edu/wp-content/uploads/2018/09/professional-development-3.jpg" />
      <div data-src="https://skillscharts.com/wp-content/uploads/2020/09/how-to-develop-your-skills.jpg" />
      <div data-src="https://www.shutterstock.com/image-photo/improve-your-skills-concept-hand-260nw-274899755.jpg" />
      <div data-src="https://images5.content-hci.com/commimg/myhotcourses/blog/post/myhc_82029.jpg" />
      
    </AwesomeSlider>

    )
};

export default CarouselItem;