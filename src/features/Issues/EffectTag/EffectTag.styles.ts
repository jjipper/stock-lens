import styled from 'styled-components';

const Tag = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: 20px;

  .tag-text {
    font-size: 8px;
    font-weight: 600;
  }

  &.high {
    background: var(--effect-high-bg);
    .tag-text {
      color: var(--effect-high);
    }
  }
  &.middle {
    background: var(--effect-middle-bg);
    .tag-text {
      color: var(--effect-middle);
    }
  }
  &.low {
    background: var(--effect-low-bg);
    .tag-text {
      color: var(--effect-low);
    }
  }
`;

export { Tag };
