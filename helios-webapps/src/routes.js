import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Components from "./views/Components/Components";
import SpectaclePage from "./views/SpectaclePage/SpectaclePage";
import ConcertPage from './views/ConcertPage/ConcertPage';
import HeliosPage from "./views/HeliosPage/HeliosPage";
import EcolePage from './views/EcolePage/EcolePage';
import ConservatoirePage from "./views/ConservatoirePage/ConservatoirePage";
import ChristelPage from "./views/ChristelPage/ChristelPage";
import IsabellePage from "./views/IsabellePage/IsabellePage";
import ChristophePage from "./views/ChristophePage/ChristophePage";
import NathanaellePage from "./views/NathanaellePage/NathanaellePage";
import PressePage from './views/PressePage/PressPage';
import MecenatPage from './views/MecenatPage/MecenatPage';
import LoginPage from "./views/LoginPage/LoginPage";
import OeuvresPage from "./views/OeuvresPage/OeuvresPage";
import ProgramPage from "./views/ProgramPage/ProgramPage";
import ClassiquePage from "./views/ClassiquePage/ClassiquePage";
import ContemporainPage from "./views/ContemporainPage/ContemporainPage";
import GaleriePage from "./views/GaleriePage/GaleriePage";
import EditionPage from "./views/EditionPage/EditionPage";
import DiscographiePage from "./views/DiscographiePage/DiscographiePage";
import ContactPage from "./views/ContactPage/ContactPage";
import ErrorPage from "./views/ErrorPage/ErrorPage";


const routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={ConcertPage}/>
        <Route path="/helios" exact component={HeliosPage}/>
        <Route path="/christel" exact component={ChristelPage}/>
        <Route path="/isabelle" exact component={IsabellePage}/>
        <Route path="/ecole" exact component={EcolePage}/>
        <Route path="/conservatoire" exact component={ConservatoirePage}/>
        <Route path="/christophe" exact component={ChristophePage}/>
        <Route path="/nathanaelle" exact component={NathanaellePage}/>
        <Route path="/spectacles" exact component={SpectaclePage}/>
        <Route path="/presse" exact component={PressePage}/>
        <Route path="/mecenat" exact component={MecenatPage}/>
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
        <Route component={ErrorPage}/>
      </Switch>
    </React.Fragment>
  );
};
export default routes;
