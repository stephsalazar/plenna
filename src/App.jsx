import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login'
import Detail from './pages/Detail'
import Consult from './pages/Consult'
import Closing from './pages/Closing'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/detail" component={Detail} />
        <Route path="/consult" component={Consult} />
        <Route path="/closing" component={Closing} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;