import styled from 'styled-components';

const FooterStyled = styled.footer`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  text-align: center;

  .footer_text {
    font-size: .8em;
  }
  .footer_highlight {
    color: ${({theme}) => theme.secondary};
  }
  .footer_network {
    margin: auto;
  }
`;
export default FooterStyled;
