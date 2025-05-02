import { Fragment } from "react/jsx-runtime";
import React from 'react';
import { Link } from "react-router-dom";
import { API_BASE } from "../api";
import './HeaderInfo.css'

const HeaderInfo = () => {

  return (
    <>
      <header>
        <a href={API_BASE} className="logoOver">
          TicketSystem
          <div className="logo"><img src="/android-chrome-black-cropped192x192.png" alt="Logo" loading="lazy"/></div>
        </a>
        <nav>
        <a href={API_BASE}>Teams</a>
        <Link to='/chat'>
          AI Chatbot
        </Link>
        <a href={API_BASE}>Dashboards</a>
        <button className="signIn" onClick={() => {
          window.location.href = import.meta.env.VITE_API_URL + '/api/auth/google'
        }}
        >Sign In
        </button>
        </nav>
      </header>
    </>
  );
}

export default HeaderInfo;
