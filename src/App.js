import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import { Home } from './Components/Home/Home';
import { Authors } from './Components/Authors/Authors';
import { About } from './Components/About/About';
import { Posts } from './Components/Posts/Posts';
import { SinglePost } from './Components/Posts/SinglePost';
import { SingleAuthor } from './Components/Authors/SingleAuthor';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/posts' component={Posts} />
      <Route exact path='/authors' component={Authors} />
      <Route path='/about' component={About} />
      <Route path='/posts/singlepost/:id' component={SinglePost} />
      <Route path='/authors/singleauthor/:id' component={SingleAuthor} />
    </Switch>
  );
}

export default App;
