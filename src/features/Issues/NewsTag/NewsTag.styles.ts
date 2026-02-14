import styled from 'styled-components';

const Tag = styled.div`
  width: max-content;
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 4px;

  * {
    color: var(--gray-500);
  }

  .tag-text {
    font-size: 14px;
    font-weight: 400;
  }
`;

export { Tag };
