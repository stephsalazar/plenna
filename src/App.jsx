import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Detail from './pages/Detail';
import Consult from './pages/Consult';
import Closing from './pages/Closing';
import NotFound from './pages/NotFound';

const patient = {
  isLogged: true,
  name: 'Verónica Guzmán',
  age: 32,
  weight: 55.200,
  height: 152,
  allergies: 'Penicilina',
  medicalHistory: [
    {
      date: '12 / Octubre / 2021',
      resume: 'Consulta Básica',
    },
    {
      date: '20 / Diciembre / 2021',
      resume: 'Papanicolau',
    },
    {
      date: '15 / Enero / 2022',
      resume: 'Revisión DIU',
    },
  ],
  nextVisits: [
    {
      date: '25 / Marzo / 2022',
      resume: 'Lectura de estudios',
    },
    {
      date: '12 / Mayo / 2022',
      resume: 'Retiro del DIU',
    },
  ],
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/detail">
          <Detail patient={patient} />
        </Route> 
        <Route path="/consult">
          <Consult patient={patient} />
        </Route> 
        <Route path="/closing">
          <Closing name={patient.name} />
        </Route> 
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;