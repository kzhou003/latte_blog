import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/blog/:id" component={BlogPost} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;