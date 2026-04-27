import { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/auth/login/Login';
import Protected from './components/routing/protected/Protected';
import NotFound from './components/ui/notFound/NotFound'
import Dashboard from './components/dashboard/Dashboard';
import Catalog from './components/catalog/Catalog';

import Home from './components/home/Home';

function App() {
  const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogIn = () => {
    setLoggedIn(true);
  }

  const handleLogOut = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/home/*" element={<Dashboard onLogOut={handleLogOut} />} />
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="/login" element={<Login onLogin={handleLogIn} />} />
          <Route path="/catalog" element={<Catalog />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

/* <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="/login" element={<Login onLogin={handleLogIn} />} />
          <Route path="/catalog"
            element={
              <Protected isSignedIn={loggedIn}>
                <Dashboard />
              </Protected>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
/*

import Login from "./components/auth/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import NotFound from "./components/ui/notFound/NotFound";
import Protected from "./components/routing/protected/Protected";
import { useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogIn = () => {
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="login" />} />
          <Route path="login" element={<Login onLogin={handleLogIn} />} />
          <Route element={<Protected isSignedIn={loggedIn} />}>
            <Route
              path="/library/*"
              element={<Dashboard onLogOut={handleLogOut} />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;*/