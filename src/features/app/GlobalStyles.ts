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
  button,
  [role='button'],
  a {
    user-select: none;
  }

  :where(a, button, [role='button'], input, select, textarea):focus-visible {
    outline: 3px solid var(--primary);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  ul, ol, li {
    list-style: none;
  }

  body {
    background: var(--bg-color);
  }
  body, * {
    font-family: 'Pretendard Variable', 'Pretendard', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: var(--gray-900);
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 24px 60px;
  }

`;
