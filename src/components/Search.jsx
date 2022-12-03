import React from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const Search = ({ search, setSearch }) => {
  const onSetSearch = (e) => setSearch(e.target.value);

  return (
    <InputContainer>
      <IoSearch />
      <Input value={search} onChange={onSetSearch} />
    </InputContainer>
  );
};

const InputContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem 2rem;
  width: 100%;
  background-color: var(--colors-ui-base);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  background-color: var(--colors-ui-base);
  color: var(--color-text);
  border: none;
  outline: none;
`;

export default Search;
