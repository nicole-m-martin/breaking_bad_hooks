import React from 'react';
import CharList from '../components/characters/CharList';
import useCharList from '../hooks/useCharList';

const ListComponent = () => {
  const { isLoading, characters } = useCharList();

  return isLoading ? (
    <h2>loading....</h2>
  ) : (
    <main>
      <CharList characters={characters} />
    </main>
  );
};

export default ListComponent;
