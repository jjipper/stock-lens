import styled from 'styled-components';

const Tag = styled.div`
  width: max-content;
  background: var(--gray-50);
  padding: 5px 8px;
  border-radius: 20px;
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
