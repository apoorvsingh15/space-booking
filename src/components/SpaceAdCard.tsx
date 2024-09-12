
import CardIcon from '../assets/images/card_icon.png';
import DummyImage from '../assets/images/dummy_image.png';
import BadgeImage from '../assets/images/badge.png';
import LeftArrow from '../assets/images/left_arrow.png';
import MiddleArrow from '../assets/images/middle_arrow.png';
import RightArrow from '../assets/images/right_arrow.png';
const SpaceAdCard = () => {
  return (
    <div className='space_ad_card_container'>
      <div className='card_header'>
        <div className='header_text'>HSR Sector 6, Service Road</div>
        <div className='header_icon'>
          <img className='card_icon' src={CardIcon} />
        </div>
      </div>
      <div className='card_body'>
        <img className='dummy_image' src={DummyImage} />
        <img className='badge_image' src={BadgeImage} />
      </div>
      <div className='card_buttons_container'>
        {/* Left Button */}
        <div className='card_left_button'>
          <div className='card_left_button_text'>
            <div className='card_left_button_text_name'>Day Pass</div>
            <div className='card_left_button_text_price'><span className='card_left_button_text_price_value'>₹249</span>/Day</div>
          </div>
          <div className='card_left_button_icon'>
            <img className='left_arrow' src={LeftArrow} />
            <img className='middle_arrow' src={MiddleArrow} />
            <img className='right_arrow' src={RightArrow} />
          </div>

        </div>
        {/* Right Button */}
        <div className='card_right_button'>
          <div className='card_left_button_text'>
            <div className='card_left_button_text_name'>Bulk Pass</div>
            <div className='card_left_button_text_price'><span className='card_left_button_text_price_value'>₹2400</span>/10 Days</div>
          </div>
          <div className='card_left_button_icon'>
            <img className='left_arrow' src={LeftArrow} />
            <img className='middle_arrow' src={MiddleArrow} />
            <img className='right_arrow' src={RightArrow} />
          </div>
          <div className='discount_button'>
            20% Discount
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceAdCard;