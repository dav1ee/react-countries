import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import Info from '../components/Info';

import { searchByCountry } from '../config';

const Details = () => {
  const [country, setCountry] = React.useState(null);
  const { push, goBack } = useHistory();
  const { name } = useParams();

  React.useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info push={push} {...country} />}
    </div>
  );
};

export default Details;
