
import FooterIcon from '../assets/images/footer.png';
const Footer = () => {
  return (
    <>
      <div className='footer_container'>
        <img className='footer_icon' src={FooterIcon} />
      </div>
      <div className='copyright_container'>
        © Copyright 2023. Bhive Private Limited
      </div>
    </>
  );
};

export default Footer;