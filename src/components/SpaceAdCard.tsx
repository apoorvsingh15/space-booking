
import CardIcon from '../assets/images/card_icon.png';
import BadgeImage from '../assets/images/badge.png';
import LeftArrow from '../assets/images/left_arrow.png';
import MiddleArrow from '../assets/images/middle_arrow.png';
import RightArrow from '../assets/images/right_arrow.png';

interface ISpaceAdCardProps {
  title: string;
  dayPassPrice: number;
  discountPercentage: number;
  cardImage: string;
}
const SpaceAdCard = ({ title, dayPassPrice, discountPercentage, cardImage }: ISpaceAdCardProps) => {
  return (
    <div className='space_ad_card_container'>
      <div className='card_header'>
        <div className='header_text'>{title}</div>
        <div className='header_icon'>
          <img className='card_icon' src={CardIcon} />
        </div>
      </div>
      <div className='card_body'>
        <img className='dummy_image' src={`https://github.com/MujtabaKably/bhive-interview-project-data/blob/main/${cardImage}?raw=true`} />
        <img className='badge_image' src={BadgeImage} />
      </div>
      <div className='card_buttons_container'>
        {/* Left Button */}
        <div className='card_left_button'>
          <div className='card_left_button_text'>
            <div className='card_left_button_text_name'>Day Pass</div>
            <div className='card_left_button_text_price'><span className='card_left_button_text_price_value'>₹{dayPassPrice}</span>/Day</div>
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
            <div className='card_left_button_text_price'>
              <span className='card_left_button_text_price_value'>₹{Math.round((dayPassPrice * 10) - (discountPercentage / 100) * (dayPassPrice * 10))}</span>/10 Days</div>
          </div>
          <div className='card_left_button_icon'>
            <img className='left_arrow' src={LeftArrow} />
            <img className='middle_arrow' src={MiddleArrow} />
            <img className='right_arrow' src={RightArrow} />
          </div>
          <div className='discount_button'>
            {discountPercentage}% Discount
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceAdCard;