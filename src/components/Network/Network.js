import Column from "../../shared/Flex/Column";
import NetworkStyled from "./Network.styled";

const Network = () => {
  return (
    <NetworkStyled>
      <Column className='network_icons'>
        <a href='mailto:tayler@taynich.dev'>
          <i className='fas fa-envelope'></i>
        </a>
        <a href='https://www.linkedin.com/in/taylernichols/' target='_blank' rel='noreferrer'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='https://github.com/Tpikl' target='_blank' rel='noreferrer'>
          <i className='fab fa-github-square'></i>
        </a>
        <a href='/resumeTaylerNichols.pdf' target='_blank'>
          <div className='network_cv'>CV</div>
        </a>
      </Column>
    </NetworkStyled>
  );
};
export default Network;
