import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../src/components/layout/Navbar/Navbar';
import Dashboard from '../src/components/dashboard/Dashboard/Dashboard';
import PostDetails from '../src/components/posts/PostDetails/PostDetails';
import Login from '../src/components/auth/Login/Login';
import Register from '../src/components/auth/Register/Register';
import CreatePost from '../src/components/posts/CreatePost/CreatePost';
import Profile from '../src/components/profile/Profile/Profile';
import NotFound from '../src/components/not-found/NotFound/NotFound';
import EditPost from '../src/components/posts/EditPost/EditPost';

import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/create" component={CreatePost} />
            <Route exact path="/post/:id" component={PostDetails} />
            <Route path="/post/:id/edit" component={EditPost} />
            <Route path="/profile/:id" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
