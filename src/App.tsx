import { useEffect,useState } from 'react';
import ChatBot from './components/ChatBot';
import MainPage from './components/MainPage';
import GetOAuthToken from './components/GetOAuthToken';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';



const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    GetOAuthToken().then(setUser);
  }, [])
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