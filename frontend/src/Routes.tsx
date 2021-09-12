import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import Error from "pages/Error";
import { BrowserRouter, Switch, Route } from "react-router-dom";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact> 
                    <Home />
                </Route>
                <Route path="/dashboard" > 
                    <Dashboard />
                </Route>
                <Route path="/**" > 
                    <Error  />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;