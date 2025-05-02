import { Fragment } from "react/jsx-runtime";
import React from 'react';
import { Link } from "react-router-dom";
import { API_BASE } from "../api";
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
        <button className="signIn" onClick={() => {
          `${API_BASE}/auth/google`
        }}
        >Sign In
        </button>
        </nav>
      </header>
    </>
  );
}

export default HeaderInfo;
