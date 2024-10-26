import Home from './Components/Home';
import {Browser, Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import RequestQuote from './Components/RequestQuote';
import WhoWeServe from './Components/WhoWeServe';
import WhatWeDo from './Components/WhatWeDo';
import WhereWeAre from './Components/WhereWeAre';

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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
