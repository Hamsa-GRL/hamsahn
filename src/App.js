
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Companies from './components/Companies'

function App() {
  return (
    <div className="antialiased ">
      <Router>
        {/*<Header/>*/}
        <Route path="/" exact>
          <div className="sm:w-2/3 mx-auto">
            <Home />
            <About />
            <Companies />
            <Projects />
            <Blog />
            <Contact />
          </div>

        </Route>
      </Router>
    </div>

  );
}

export default App;
