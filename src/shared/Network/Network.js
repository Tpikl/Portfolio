import NetworkStyled from "./Network.styled";

const Network = () => {

  return (
    <NetworkStyled>
      <a title='Email' href='mailto:tayler@taynich.dev'>
        <i className='fas fa-envelope' />
      </a>
      <a title='LinkedIn' href='https://www.linkedin.com/in/taylernichols/' target='_blank' rel='noreferrer'>
        <i className='fab fa-linkedin' />
      </a>
      <a title='GitHub' href='https://github.com/Tpikl/Portfolio' target='_blank' rel='noreferrer'>
        <i className='fab fa-github-square' />
      </a>
      <a title='Resume / CV' href='/resumeTaylerNichols-july2021.pdf' target='_blank' rel='noreferrer'>
        <div className='network_cv'>CV</div>
      </a>
    </NetworkStyled>
  );
};
export default Network;
