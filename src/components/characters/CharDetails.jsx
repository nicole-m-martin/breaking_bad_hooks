export const findCharacters = async () => {
  const res = await fetch('https://www.breakingbadapi.com/api/characters');
  const results = await res.json();

  return results.map((character) => ({
    id: character.char_id,
    name: character.name,
    img: character.img,
  }));
};
