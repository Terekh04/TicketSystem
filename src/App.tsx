import { useEffect,useState } from 'react';
import ChatBot from './services/ChatBot';
import MainPage from './pages/MainPage';
import GetOAuthToken from './services/GetOAuthToken';
import { API_BASE } from './api';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';


function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/auth/me`, {
      credentials: "include",
    })
      .then((res) => res.ok ? res.json() : null)
      .then((user) => {
        if (user) {
          setUser(user);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "100px" }}>Loading...</div>;
  }

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