import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {search, shieldHalfOutline, logoUsd,logoEuro, logoMastodon } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';
import Tab6 from './pages/Tab6';
import Tab7 from './pages/Tab7';
import Tab8 from './pages/Tab8';
import Tab9 from './pages/Tab9';
import Tab10 from './pages/Tab10';
import Tab11 from './pages/Tab11';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/tab4">
            <Tab4 />
          </Route>
          <Route path="/tab5">
            <Tab5 />
          </Route>
          <Route path="/tab6">
            <Tab6 />
          </Route>
          <Route path="/tab7">
            <Tab7 />
          </Route>
          <Route path="/tab8">
            <Tab8 />
          </Route>
          <Route path="/tab9">
            <Tab9 />
          </Route>
          <Route path="/tab10">
            <Tab10 />
          </Route>
          <Route path="/tab11">
            <Tab11 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={shieldHalfOutline} />
            <IonLabel>Sheildpay</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={logoUsd} />
            <IonLabel>Send Money</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={logoMastodon} />
            <IonLabel>Request Money</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={logoEuro} />
            <IonLabel>Easy To Use</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
