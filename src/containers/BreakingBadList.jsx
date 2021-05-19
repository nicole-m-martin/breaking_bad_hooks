import React, { useState, useEffect } from 'react';
import CharList from '../components/characters/CharList';
// import Spinner from '../components/ui/Spinner';
import { findAllCharacters } from '../services/BreakingBadApi';

const BreakingBadList = () => {
  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    findAllCharacters()
      .then((characters) => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  return isLoading ? (
    // <Spinner />
    <h2>loading....</h2>
  ) : (
    <main>
      <CharList characters={characters} />
    </main>
  );
};
export default BreakingBadList;
