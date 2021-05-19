import React, { useState, useEffect } from 'react';
import CharDetails from '../components/characters/CharDetails';
import { getCharacterDetails } from '../services/BreakingBadApi';
// import Spinner from '../img/spinner.gif';

const BreakingBadDetail = ({ match }) => {
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterDetails(match.params.id)
      .then((character) => setCharacter(character))
      .finally(() => setLoading(false));
  }, []);

  return isLoading ? (
    // <Spinner />
    <h2>loading....</h2>
  ) : (
    <main>
      <CharDetails character={character[0]} />
    </main>
  );
};

export default BreakingBadDetail;
