import Select from 'react-select';
import styled from 'styled-components';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      padding: '0.25rem',
      height: '50px',
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      border: 'none',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow)',
      cursor: 'pointer',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      cursor: 'pointer',
    }),
  },
})`
  width: 200px;
  border: none;
  border-radius: var(--radius);
  font-family: var(--family);
  & > * {
    box-shadow: var(--shadow);
  }
  & * {
    color: var(--colors-text) !important;
  }
  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;
