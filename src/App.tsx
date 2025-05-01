import { useEffect } from 'react';
import ChatBot from './components/ChatBot';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';



const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ 
          <MainPage/>
        } />
      <Route path="/chat" element={
        <ChatBot />
        } /> 
    </Routes>
  </Router>

  );
}

export default App;