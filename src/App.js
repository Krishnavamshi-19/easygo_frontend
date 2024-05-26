import React from 'react'
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SigninPageTB from './pages/signintb';
import SigninPageLF from './pages/signinlf';
import SigninPageCU from './pages/signincu';
import SigninPageEBT from './pages/signinebt';
import SigninPageHAF from './pages/signinhaf';
import TravelBuddyPage from './pages/travelbuddy';
import LostAndFoundPage from './pages/lostandfound';
import CollegeUpdatesPage from './pages/collegeupdates';
import OtherServicesebtPage from './pages/otherservicesebt';
import OtherServiceshafPage from './pages/otherserviceshaf';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/signin" element={<SigninPage/>} exact />
          <Route path="/signintb" element={<SigninPageTB/>} exact />
          <Route path="/signinlf" element={<SigninPageLF/>} exact />
          <Route path="/signincu" element={<SigninPageCU/>} exact />
          <Route path="/signinebt" element={<SigninPageEBT/>} exact />
          <Route path="/signinhaf" element={<SigninPageHAF/>} exact />
          <Route path="/travelbuddy" element={<TravelBuddyPage/>} exact />
          <Route path="/lostandfound" element={<LostAndFoundPage/>} exact />
          <Route path="/collegeupdates" element={<CollegeUpdatesPage/>} exact />
          <Route path="/otherservicesebt" element={<OtherServicesebtPage/>} exact />
          <Route path="/otherserviceshaf" element={<OtherServiceshafPage/>} exact />


      </Routes>
    {/* <Home/> */}
    </Router>
  );
}

export default App;
