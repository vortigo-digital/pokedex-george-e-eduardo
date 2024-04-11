import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import Search from './components/Search';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <div className="MainContainer">
      <BrowserRouter>
        <Header />
        <UserProvider>
          <Routes>
            <Route exact path="/Home" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;



