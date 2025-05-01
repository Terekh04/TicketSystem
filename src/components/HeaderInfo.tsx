import { Fragment } from "react/jsx-runtime";

const apiUrl = import.meta.env.VITE_API_URL;

function HeaderInfo() {

  return (
    <>
      <header>
        <a href={apiUrl} className="logoOver">
          TicketSystem
          <div className="logo"><img src="/android-chrome-black-cropped192x192.png" alt="Logo" /></div>
        </a>
        <nav>
        <a href={apiUrl}>Teams</a>
        <a href={apiUrl}>AI Chatbot</a>
        <a href={apiUrl}>Dashboards</a>
        <a href={apiUrl} className="signIn">Sign In</a>
        </nav>
      </header>
    </>
  );
}

export default HeaderInfo;
