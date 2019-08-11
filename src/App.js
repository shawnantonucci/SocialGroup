import React from "react";
import NavBar from "./components/NavBar";

import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import ExternalApi from "./components/ExternalApi";

function App() {
    return (
        <div className="App">
            {/* New - use BrowserRouter to provide access to /profile */}
            <BrowserRouter>
                <header>
                    <NavBar />
                </header>
                <Switch>
                    <Route path="/" exact />
                    <PrivateRoute path="/profile" component={Profile} />

                    {/* NEW - add a route to the ExternalApi component */}
                    <PrivateRoute
                        path="/external-api"
                        component={ExternalApi}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
