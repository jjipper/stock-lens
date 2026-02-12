import { createGlobalStyle } from 'styled-components';
import '../styles/fonts.css';
import '../styles/colors.css';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--bg-color);
  }

  body, * {
    font-family: 'Pretendard', sans-serif;
  }

  .content-wrapper {
    padding: 16px 24px;
  }

`;

export default GlobalStyles;
