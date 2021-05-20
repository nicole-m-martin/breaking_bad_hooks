import React from 'react';
import PropTypes from 'prop-types';
import style from '../../styles/CharDetails.modules.css';

const CharDetails = ({ name, img, birthday, nickname, portrayed }) => (
  <section className={style.sectionBox} aria-label="character">
    <img className={style.charImage} src={img} alt={nickname} />
    <h2 className={style.charText}> Name: {name}</h2>
    <h1 className={style.charText}>Nickname: {nickname}</h1>
    <p className={style.charText}>Birthday: {birthday}</p>
    <p className={style.charText}>Actor: {portrayed}</p>
  </section>
);

CharDetails.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  nickname: PropTypes.string,
  birthday: PropTypes.string,
  portrayed: PropTypes.string,
};

export default CharDetails;
