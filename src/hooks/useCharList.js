import { useState, useEffect } from 'react';
import { findAllCharacters } from '../services/BreakingBadApi';

const useCharList = () => {
  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    findAllCharacters()
      .then((characters) => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);
  return { isLoading, characters };
};

export default useCharList;
