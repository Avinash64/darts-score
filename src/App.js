import Header from './components/header';
import "./App.css";
import Setup from './components/setup';
import Summary from './components/summary';
import Gameplay from './components/gameplay';
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
  
function App() {
  return (
    <Router>
    <div className='app'>
      <Header></Header>
      <Routes>
      <Route path="/"  element={<Setup />} />
      <Route path="/summary" element={<Summary />} />

      <Route path="/gameplay" element={<Gameplay />} />
      </Routes>
      {/* <Setup></Setup> */}
      {/* <Summary></Summary> */}
      {/* <Gameplay></Gameplay> */}
      <Header></Header>

    </div>
    </Router>
  );
}

export default App;
