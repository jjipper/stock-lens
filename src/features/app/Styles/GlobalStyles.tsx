import { createGlobalStyle } from 'styled-components';
import 'features/shared/styles/fonts.css';
import 'features/shared/styles/colors.css';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul, ol, li {
    list-style: none;
  }

  body {
    background: var(--bg-color);
  }
  body, * {
    font-family: 'Pretendard', sans-serif;
    color: var(--gray-900);
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 24px;
  }

`;
