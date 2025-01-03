import Home from './Components/Home';
import {Browser, Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import RequestQuote from './Components/Companies';
import WhoWeServe from './Components/WhoWeServe';
import WhatWeDo from './Components/WhatWeDo';
import WhereWeAre from './Components/WhereWeAre';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Companies from './Components/Companies';
import Guards from './Components/Guards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index element = {<Home />} />
          <Route path="/home" element = {<Home />} />
          <Route path="/RequestQuote" element = {<RequestQuote/> } />
          <Route path="/WhoWeServe" element = {<WhoWeServe/> } />
          <Route path="/WhatWeDo" element = {<WhatWeDo/> } />
          <Route path="/WhereWeAre" element = {<WhereWeAre/> } />
          <Route path="/Companies" element = {<Companies/> } />
          <Route path="/companies-for-hire" element = {<Companies/> } />
          <Route path="/security-guard-register" element = {<Guards/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
