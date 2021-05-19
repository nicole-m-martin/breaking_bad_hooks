import React from 'react';
import logo from '../../img/logo.png';
import style from '../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={style.headerBox}>
      <img className={style.bbLogo} src={logo} alt="breaking bad logo" />
    </header>
  );
};

export default Header;
