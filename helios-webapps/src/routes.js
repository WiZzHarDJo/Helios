import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Components from "./views/Components/Components";
import LandingPage from "./views/LandingPage/LandingPage";
import ConcertPage from './views/ConcertPage/ConcertPage';
import HeliosPage from "./views/HeliosPage/HeliosPage";
import PedagogiePage from './views/PedagogiePage/PedagogiePage';
import PressePage from './views/PressePage/PressPage';
import MecenatPage from './views/MecenatPage/MecenatPage';
import ProfilePage from "./views/ProfilePage/ProfilePage";
import LoginPage from "./views/LoginPage/LoginPage";

const routes = () => {
  return (
    <Switch>
    <Route path="/" exact component={LandingPage}/>
    <Route path="/concerts" exact component={ConcertPage}/>
    <Route path="/helios" exact component={HeliosPage}/>
    <Route path="/pedagogie" exact component={PedagogiePage}/>
    <Route path="/presse" exact component={PressePage}/>
    <Route path="/mecenat" exact component={MecenatPage}/>
    <Route path="/profile-page" component={ProfilePage} />
    <Route path="/login-page" component={LoginPage} />
    <Route path="/components" component={Components} />
  </Switch>
  );
};
export default routes;
