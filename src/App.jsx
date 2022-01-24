import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AuthContext } from "./utils/context/AuthContext";
import getData from './utils/firebase/firestore';
import LogIn from './pages/LogIn';
import Detail from './pages/Detail';
import Consult from './pages/Consult';
import Closing from './pages/Closing';
import NotFound from './pages/NotFound';
import Loader from "./components/Loader";


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
      .then(result => {
        setData([...result]);
      });
  }, []);

  return (
    <AuthContext>
      <Router>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/detail">
            {
              data.length
              ? (<Detail patient={data[0]} />)
              : (<Loader />)
            } 
          </Route> 
          <Route exact path="/consult">
          {
              data.length
              ? (<Consult patient={data[0]} />)
              : (<Loader />)
            } 
          </Route> 
          <Route exact path="/closing">
            {
              data.length
              ? (<Closing name={data[0].name} />)
              : (<Loader />)
            } 
          </Route> 
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </AuthContext>
  );
}

export default App;