import React, { useContext } from 'react';
import './style.css';
import HeaderContext from '../../../context/HeaderContext';

function SwitchTheme() {
  const { handleTheme, storageMode } = useContext(HeaderContext);

  return (
    <div className="container">
      <input
        type="checkbox"
        className="checkbox chk"
        checked={ storageMode }
        onChange={ handleTheme }
      />
      <label className="label" htmlFor="chk">
        <img src="/sun.svg" alt="sunTheme" />
        <img src="/moon.svg" alt="moonTheme" />
        <div className="ball" />
      </label>
    </div>
  );
}

export default SwitchTheme;
