import React from 'react';
import CharDetails from '../components/characters/CharDetails';

import useCharDetails from '../hooks/useCharDetails';
import { useParams } from 'react-router-dom';

const DetailsComponent = () => {
  const { id } = useParams();

  const { isLoading, character } = useCharDetails(id);
  return isLoading ? (
    <h2>loading....</h2>
  ) : (
    <main>
      <CharDetails {...character[0]} />
    </main>
  );
};

export default DetailsComponent;
