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
    color: var(--theme-primary);
  }
  .footer_repo {
    font-size: 1.25em;
    margin: 0 5px;
    color: var(--theme-primary);
  }
  .footer_repo:hover {
    transition: .5s;
    color: var(--theme-secondary);
  }

  .footer_network {
    margin: auto;
  }
`;
export default FooterStyled;
