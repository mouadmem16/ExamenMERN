import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import UsersList from "./components/users-list.component";
import EditUser from "./components/edit-users.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={UsersList} />
      <Route path="/edit/:id" component={EditUser} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
