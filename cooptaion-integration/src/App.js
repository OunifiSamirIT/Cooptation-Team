import React from 'react';
import Navbar from './shared/components/Navigation/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from 'react-router-dom';
import Offers from './offres/pages/Offers';
import Hello from './testALA/helo';
import Admin from './admin/components/RecPage';

function App() {
  return (
    
   <Router>
    <Navbar />
<Routes>
<Route path="/" element={<Hello />} />
<Route path="/admin" element={<Admin />} />
<Route path="/offers" element={<Offers />} />
</Routes>
   </Router>
  );
}

export default App;
