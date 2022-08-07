import React, { useState } from 'react';
import './Header.scss';
import logo from '../../images/torunlarLogo.png';
import Form from '../Form/Form';
import cn from 'classnames';

export default function Header() {
  const [isFormHidden, setIsFormHidden] = useState(false);
  const handleFormHidden = () => {
    setIsFormHidden(!isFormHidden);
  };

  console.log(isFormHidden)

  return (
    <header className="Header">
      <div className="Header__title-wrapper">
        <img 
          src={logo} 
          alt="torunlar logo"
          className="Header__logo"
        />
        <h1 className="Header__title">ISTANBUL</h1>
      </div>

      <div className="Header__info">
        <div className="Header__small-titles">
          <h2 className="Header__small-titles--upper">A PRIVILEGED LIFE WITH A</h2>
          <h2 className="Header__small-titles--lower">UNIQUE ISTANBUL VIEW</h2>
          <div className="Header__additional-info">
            <p className="Header__additional-info--lines">
              <span className="Header__additional-info--words">LIVE</span>
              <span className="Header__additional-info--words">WORK</span>
              <span>TOGETHER</span>
            </p>
            <p className="Header__additional-info--lines">RESIDANCE - OFFICE</p>
          </div>
        </div>

        <div className={cn('Header__Form', {'Header__Form--hidden': isFormHidden})}>
          <Form />
          <button
            className="Header__Form-button"
            type="button"
            onClick={handleFormHidden}
          >
            Form
          </button>
        </div>
      </div>
    </header>
  )
}
