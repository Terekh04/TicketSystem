import { Fragment } from "react/jsx-runtime";
import React from 'react';
import { Link } from "react-router-dom";
import './HeaderInfo.css'

const apiUrl = import.meta.env.VITE_API_URL;
const HeaderInfo = () => {

  return (
    <>
      <header>
        <a href={apiUrl} className="logoOver">
          TicketSystem
          <div className="logo"><img src="/android-chrome-black-cropped192x192.png" alt="Logo" loading="lazy"/></div>
        </a>
        <nav>
        <a href={apiUrl}>Teams</a>
        <Link to='/chat'>
          AI Chatbot
        </Link>
        <a href={apiUrl}>Dashboards</a>
        <a href={apiUrl + '/auth/google'} className="signIn">Sign In</a>
        </nav>
      </header>
    </>
  );
}

export default HeaderInfo;
