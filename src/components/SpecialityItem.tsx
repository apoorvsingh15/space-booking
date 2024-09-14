
import DumbellImage from '../assets/images/dumbell.png';
import WifiImage from '../assets/images/wifi.png';
import EventsImage from '../assets/images/events.png';
import AffordableImage from '../assets/images/affordable.png';
import CafeImage from '../assets/images/cafe.png';
import ComfortImage from '../assets/images/comfort.png';
import QuickImage from '../assets/images/quick.png';
import SportsImage from '../assets/images/sports.png';

const SpecialityItem = ({
  displayText = '',
  displayImage = ''
}) => {
  const displaySelectedImage = () => {

    switch (displayImage) {
      case 'Events':
        return EventsImage;
      case 'Dumbell':
        return DumbellImage;
      case 'Wifi':
        return WifiImage;
      case 'Affordable':
        return AffordableImage;
      case 'Cafe':
        return CafeImage;
      case 'Comfort':
        return ComfortImage;
      case 'Quick':
        return QuickImage;
      case 'Sports':
        return SportsImage;
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