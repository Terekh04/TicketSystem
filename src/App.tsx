import { useEffect } from 'react';
import HeaderInfo from './components/HeaderInfo';
import './App.css';


const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  return (
    <>
    <HeaderInfo/>
    </>
  );
}

export default App;