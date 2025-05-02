import { useEffect,useState } from 'react';
import ChatBot from './services/ChatBot';
import MainPage from './pages/MainPage';
import GetOAuthToken from './services/GetOAuthToken';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';


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