import { useEffect } from 'react';
import HeaderInfo from './components/HeaderInfo';
import Line from './components/Line';
import './App.css';


const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  return (
    <>
    <div className='siteWrapper'>
    <HeaderInfo/>
    <Line/>
    </div>
    </>
  );
}

export default App;