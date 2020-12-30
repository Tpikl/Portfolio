import Network from "../Network/Network";
import FooterStyled from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <span className='footer_text'>Designed & developed by <span className='footer_highlight'>Tayler Nichols</span>.</span>
      <div className='footer_network'>
        <Network />
      </div>
    </FooterStyled>
 );
};
export default Footer;
