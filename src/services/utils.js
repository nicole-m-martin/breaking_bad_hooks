export const charInfo = (characters) => {
  const responseData = characters.map((character) => {
    return {
      id: character.char_id,
      name: character.name,
      img: character.img,
    };
  });
  return responseData;
};

export const oneCharDetail = (characters) => {
  const responseData = characters.map((character) => {
    return {
      id: character.char_id,
      name: character.name,
      img: character.img,
      birthday: character.birthday,
      nickname: character.nickname,
      portrayed: character.portrayed,
    };
  });
  return responseData;
};
