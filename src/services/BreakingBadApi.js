import { charInfo } from './utils'

export const findAllCharacters = async () => {
  const res = await fetch('https://www.breakingbadapi.com/api/characters');
  const data = await res.json();

  const results = charInfo(data)
  return results;


export const oneCharDetail = async (id) => {
  const res = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`);
  const results = await res.json();


  
}