import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import DummyPage from "./components/DummyPage"; // For dummy pages
import GroupPage from "./components/GroupPage"; // For GroupPage 
import Header from "./components/Header"; // Header component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
      setUsername(username);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
  };

  return (
    <Router>
      {isAuthenticated ? (
       <div className="app-container">
       <Header username={username} onLogout={handleLogout} /> {/* Fixed header */}
       <div className="main-layout">
         <Menu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} /> {/* Fixed menu */}
         <div className={`content ${isMenuOpen ? "menu-open" : "menu-closed"}`}> {/* Scrollable content */}
           <Routes>
             <Route path="/" element={<Dashboard />} />
             <Route path="/search" element={<DummyPage title="Search" />} />
             <Route path="/quick-bill" element={<DummyPage title="Quick Bill" />} />
             <Route path="/entry" element={<DummyPage title="Entry" />} />
             <Route path="/master" element={<DummyPage title="Master" />} />
             <Route path="/master/group" element={<GroupPage />} />
             <Route path="/pending-list" element={<DummyPage title="Pending List" />} />
             <Route path="/reports" element={<DummyPage title="Reports" />} />
             <Route path="/accounts" element={<DummyPage title="Accounts" />} />
             <Route path="/options" element={<DummyPage title="Options" />} />
           </Routes>
         </div>
       </div>
     </div>
     
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;
