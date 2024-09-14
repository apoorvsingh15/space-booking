
import LeftFooterImage from '../assets/images/footer_image.png';
import LeftFooterButtonImage from '../assets/images/google_play.png';
import RightFooterButtonImage from '../assets/images/app_store.png';
const Footer = () => {
  return (
    <>
      <div>
        <div className="download_text">Download our app now</div>
        <div className="footer_card">
          <img className='footer_image_left' src={LeftFooterImage} />
          <div>hi</div>
          <div>
            <div className='footer_card_text_right'>Boost your productivity with the BHIVE Workspace app.
              Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
            </div>
            <div className='footer_button_container'>
              <img className='footer_button_left_image' src={LeftFooterButtonImage} />
              <img className='footer_button_right_image' src={RightFooterButtonImage} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;