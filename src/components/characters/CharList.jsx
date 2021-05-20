import React from 'react';
import PropTypes from 'prop-types';
import CharItem from './CharItem';
import style from '../../styles/CharList.modules.css';

const CharList = ({ characters }) => (
  <ul aria-label="chars">
    {characters.map((character) => {
      return (
        <li key={character.name} className={style.listBox} aria-label="char">
          <CharItem {...character} />
        </li>
      );
    })}
  </ul>
);

CharList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharList;
