import { useEffect } from 'react';
import RedirectButton from './components/RedirectButton';
import './App.css';


const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  return (
    <>
      <RedirectButton />
    </>
  );
}

export default App;