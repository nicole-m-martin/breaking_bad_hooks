import { charInfo, oneCharDetail } from './utils';

export const findAllCharacters = async () => {
  const res = await fetch('https://www.breakingbadapi.com/api/characters');
  const json = await res.json();

  const results = charInfo(json);
  return results;
};

export const getCharacterDetails = async (id) => {
  const res = await fetch(
    `https://www.breakingbadapi.com/api/characters/${id}`
  );
  const json = await res.json();

  const results = oneCharDetail(json);
  return results;
};
