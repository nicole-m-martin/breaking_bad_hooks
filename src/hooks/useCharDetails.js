import { useState, useEffect } from 'react';
import { getCharacterDetails } from '../services/BreakingBadApi';

const useCharDetails = (id) => {
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterDetails(id)
      .then((character) => setCharacter(character))
      .finally(() => setLoading(false));
  }, []);
  return { isLoading, character };
};

export default useCharDetails;
