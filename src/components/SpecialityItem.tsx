
import { useState } from 'react';
import DumbellImage from '../assets/images/dumbell.png';
import WifiImage from '../assets/images/wifi.png';
const SpecialityItem = ({
  displayText = '',
  displayImage = ''
}) => {
  const displaySelectedImage = () => {

    switch (displayImage) {
      case 'Dumbell':
        return DumbellImage;
      case 'Wifi':
        return WifiImage;
      default:
        return DumbellImage;
    }
  }
  return (
    <div

      className='speciality_item_container'>
      <img className='image_dimensions' src={displaySelectedImage()} />
      <div className='speciality_text'>
        <div>{displayText}</div>
        <div className='speciality_description' >
          One liner details about the feature
        </div>
      </div>
    </div>
  );
};

export default SpecialityItem;