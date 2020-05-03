import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Components from "./views/Components/Components";
import SpectaclePage from "./views/SpectaclePage/SpectaclePage";
import ConcertPage from './views/ConcertPage/ConcertPage';
import HeliosPage from "./views/HeliosPage/HeliosPage";
import ChristelPage from "./views/ChristelPage/ChristelPage";
import VincianePage from "./views/VincianePage/VincianePage";
import ChristophePage from "./views/ChristophePage/ChristophePage";
import NathanaellePage from "./views/NathanaellePage/NathanaellePage";
import PedagogiePage from './views/PedagogiePage/PedagogiePage';
import PressePage from './views/PressePage/PressPage';
import MecenatPage from './views/MecenatPage/MecenatPage';
import ProfilePage from "./views/ProfilePage/ProfilePage";
import LoginPage from "./views/LoginPage/LoginPage";
import OeuvresPage from "./views/OeuvresPage/OeuvresPage";
import ProgramPage from "./views/ProgramPage/ProgramPage";
import ClassiquePage from "./views/ClassiquePage/ClassiquePage";
import ContemporainPage from "./views/ContemporainPage/ContemporainPage";
import GaleriePage from "./views/GaleriePage/GaleriePage";
import EditionPage from "./views/EditionPage/EditionPage";
import DiscographiePage from "./views/DiscographiePage/DiscographiePage";
import ContactPage from "./views/ContactPage/ContactPage";

const routes = () => {
  return (
    <Switch>
    <Route path="/" exact component={HeliosPage}/>
    <Route path="/christel" exact component={ChristelPage}/>
    <Route path="/vinciane" exact component={VincianePage}/>
    <Route path="/christophe" exact component={ChristophePage}/>
    <Route path="/nathanaelle" exact component={NathanaellePage}/>
    <Route path="/concerts" exact component={ConcertPage}/>
    <Route path="/spectacles" exact component={SpectaclePage}/>
    <Route path="/pedagogie" exact component={PedagogiePage}/>
    <Route path="/presse" exact component={PressePage}/>
    <Route path="/mecenat" exact component={MecenatPage}/>
    <Route path="/profile-page" component={ProfilePage} />
    <Route path="/login-page" component={LoginPage} />
    <Route path="/components" component={Components} />
    <Route path="/oeuvres" component={OeuvresPage} />
    <Route path="/programme" component={ProgramPage} />
    <Route path="/classique" component={ClassiquePage} />
    <Route path="/contemporain" component={ContemporainPage} />
    <Route path="/edition" component={EditionPage} />
    <Route path="/galerie" component={GaleriePage} />
    <Route path="/discographie" component={DiscographiePage} />
    <Route path="/contact" component={ContactPage} />
  </Switch>
  );
};
export default routes;
