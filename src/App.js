import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/:post_id' component={Post} />
      </Switch>
    </div>
  );
}

export default App;
