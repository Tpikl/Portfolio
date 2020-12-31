import styled from 'styled-components';

const FooterStyled = styled.footer`
  margin: 20px 0 10px;
  display: flex;
  flex-direction: column;
  text-align: center;

  .footer_text {
    font-size: .8em;

  }
  .footer_highlight {
    color: ${({theme}) => theme.secondary};
  }
  .footer_repo {
    font-size: 1.25em;
    margin: 0 5px;
    color: ${({theme}) => theme.primary};
  }
  .footer_repo:hover {
    transition: .5s;
    color: ${({theme}) => theme.hover};
  }

  .footer_network {
    margin: auto;
  }
`;
export default FooterStyled;
