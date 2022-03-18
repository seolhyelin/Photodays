
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family:'Noto Sans KR', sans-serif;
    padding: 0; margin:0;
  }
`;

export default GlobalStyle;