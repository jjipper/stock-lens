import styled from 'styled-components';

const Tag = styled.div`
  width: max-content;
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 4px;

  * {
    color: var(--gray-600);
  }

  .tag-text {
    font-size: 10px;
    font-weight: 400;
  }
`;

export { Tag };
