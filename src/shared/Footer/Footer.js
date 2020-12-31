import Network from "shared/Network";
import FooterStyled from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>

      <span className='footer_text'>
        <a href='https://github.com/Tpikl/Portfolio' target='_blank' rel='noreferrer'>
          <i className="footer_repo fas fa-code-branch" />
        </a>
        Designed & developed by <span className='footer_highlight'>Tayler Nichols</span>.
      </span>

      <div className='footer_network'>
        <Network />
      </div>

    </FooterStyled>
 );
};
export default Footer;
