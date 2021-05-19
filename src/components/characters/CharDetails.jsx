import React from 'react';
import PropTypes from 'prop-types';

const CharDetails = ({ name, img, birthday, nickname, portrayed }) => (
  <section aria-label="character">
    <img src={img} alt={nickname} />
    <h2>{name}</h2>
    <h1>{nickname}</h1>
    <p>{birthday}</p>
    <p>{portrayed}</p>
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
