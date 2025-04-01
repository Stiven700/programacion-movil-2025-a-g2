import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import Home from './pages/Home';
import Medico from './pages/Medico';
import Enfermero from './pages/Enfermero';
import Recepcionista from './pages/Recepcionista';
import Paciente from './pages/Paciente';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Router>
      <IonRouterOutlet>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/medico" component={Medico} />
          <Route exact path="/enfermero" component={Enfermero} />
          <Route exact path="/recepcionista" component={Recepcionista} />
          <Route exact path="/paciente" component={Paciente} />
          {/* Redirección al Home si la ruta no coincide con ninguna */}
          <Redirect from="/" to="/home" />
        </Switch>
      </IonRouterOutlet>
    </Router>
  </IonApp>
);

export default App;
