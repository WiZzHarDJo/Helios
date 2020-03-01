import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Acceuil from './containers/Acceuil';
import Concert from './containers/Concert';
import Helios from './containers/Helios';
import Pedagogie from './containers/Pedagogie';
import Presse from './containers/Presse';
import Mecenat from './containers/Mecenat';
import Components from "./views/Components/Components";
import LandingPage from "./views/LandingPage/LandingPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import LoginPage from "./views/LoginPage/LoginPage";

const routes = () => {
  return (
    <Switch>
    <Route path="/" exact component={Acceuil}/>
    <Route path="/concerts" exact component={Concert}/>
    <Route path="/helios" exact component={Helios}/>
    <Route path="/pedagogie" exact component={Pedagogie}/>
    <Route path="/presse" exact component={Presse}/>
    <Route path="/mecenat" exact component={Mecenat}/>
    <Route path="/landing-page" component={LandingPage} />
    <Route path="/profile-page" component={ProfilePage} />
    <Route path="/login-page" component={LoginPage} />
    <Route path="/components" component={Components} />
  </Switch>
  );
};
export default routes;
