import { useEffect } from 'react';
import HeaderInfo from './components/HeaderInfo';
import './App.css';


const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  return (
    <>
    <div className='siteWrapper'>
    <HeaderInfo/>
    </div>
    </>
  );
}

export default App;