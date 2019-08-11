import React from "react";
import "./App.css";
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
          <Navbar />
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
        </div>
    );
}

export default App;
