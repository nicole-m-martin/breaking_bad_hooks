import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../../styles/CharItem.modules.css';

const CharItem = ({ id, name, img }) => {
  return (
    <Link to={`/${id}`}>
      <div className={style.container}>
        <h3 className={style.nameText}>{name}</h3>
        <img className={style.image} src={img} alt={name} />
      </div>
    </Link>
  );
};

CharItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CharItem;
