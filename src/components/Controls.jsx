import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import { CustomSelect } from './CustomSelect';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Controls = ({ onSearch }) => {
  const [search, setSearch] = React.useState('');
  const [region, setRegion] = React.useState('');

  React.useEffect(() => {
    const regionValue = region?.value || '';
    onSearch(search, regionValue);

    // eslint-disable-next-line
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by region"
        value={region}
        onChange={setRegion}
        isSearchable={false}
        isClearable
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Controls;
