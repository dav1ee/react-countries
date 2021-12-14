import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  border: none;
  border-radius: var(--radius);
  color: var(--colors-text);
  box-shadow: var(--shadow);
  line-height: 2.5;
  cursor: pointer;
`;
