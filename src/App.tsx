import { useEffect } from 'react';
import HeaderInfo from './components/HeaderInfo';
import Line from './components/Line';
import GetStarted from './components/GetStarted';
import './App.css';


const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  return (
    <>
    <div className='siteWrapper'>
    <HeaderInfo/>
    <Line/>
    <GetStarted/>
    </div>
    </>
  );
}

export default App;