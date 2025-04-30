import { useEffect } from 'react';
import ListGroup from "./components/ListGroup";
import RedirectButton from './components/RedirectButton';

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  return (
    <>
      <RedirectButton />
    </>
  );
}

export default App;