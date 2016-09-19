import React from 'react';
import Home from './Home';
import Login from './Login';
import PointInTime from './PointInTime';
import Vispdat from './VISPDAT';
import Refuse from './Refuse';
import Sandbox from './Sandbox';
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

export default Actions.create(
  <Scene key="root" defaultRoute="home">
    <Scene key="login" component={Login} hideNavBar={hideNavBar} />
    <Scene key="home" type={ActionConst.RESET} component={Home} hideNavBar={hideNavBar} />
    <Scene key="pointInTime" component={PointInTime} hideNavBar={hideNavBar} />
    <Scene key="vispdat" component={Vispdat} hideNavBar={hideNavBar} initial={true} />
    <Scene key="refuse" component={Refuse} hideNavBar={hideNavBar} />
    <Scene key="sandbox" component={Sandbox} hideNavBar={hideNavBar} />
  </Scene>
);
