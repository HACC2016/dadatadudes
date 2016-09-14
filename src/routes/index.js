import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
import PointInTime from './PointInTime.js';
import Vispdat from './VISPDAT.js';
import Refuse from './Refuse.js';
import {
  Actions,
  Scene,
  ActionConst
} from 'react-native-router-flux';

/**
 * Order of rendering is based on index of Child scene.
 * We set hideNavBar to true to prevent that ugly default
 * header.  We can enable and style when we need to.
 *
 * If the user is not logged in, we default them to the "login" page,
 * otherwise we render the homepage.
 *
 * We set the "Home" route to use type ActionConst.RESET
 * to prevent users to returning to the form after they it has been submitted.
 */
const hideNavBar = true;
const userIsLoggedIn = true;

export default Actions.create(
  <Scene key="root" defaultRoute="home">
    <Scene key="login" component={Login} hideNavBar={hideNavBar} initial={userIsLoggedIn} />
    <Scene key="home" type={ActionConst.RESET} component={Home} hideNavBar={hideNavBar} initial={userIsLoggedIn} />
    <Scene key="pointInTime" component={PointInTime} hideNavBar={hideNavBar} />
    <Scene key="vispdat" component={Vispdat} hideNavBar={hideNavBar} />
    <Scene key="refuse" component={Refuse} hideNavBar={hideNavBar} />
  </Scene>
);
