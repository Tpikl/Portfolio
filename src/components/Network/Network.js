import NetworkStyled from "./Network.styled";

const Network = () => {
  return (
    <NetworkStyled>
      <a href='mailto:tayler@taynich.dev'>
        <i className='fa-3x fas fa-envelope'></i>
      </a>
      <a href='https://www.linkedin.com/in/taylernichols/' target='_blank' rel='noreferrer'>
        <i className='fa-3x fab fa-linkedin'></i>
      </a>
      <a href='https://github.com/Tpikl' target='_blank' rel='noreferrer'>
        <i className='fa-3x fab fa-github-square'></i>
      </a>
      <br />

      <a href='/resumeTaylerNichols.pdf' target='_blank' rel='noreferrer'>Curriculum Vitae</a>
    </NetworkStyled>
  );
};
export default Network;
