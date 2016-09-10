import React from 'react';
import Home from './Home.js';
import Login from './Login.js';
import PointInTime from './PointInTime.js';
import Vispdat from './VISPDAT.js';
import Refuse from './Refuse.js';
import {
  Actions,
  Scene
} from 'react-native-router-flux';

/**
 * Order of rendering is based on index of Child scene.
 * We set hideNavBar to true to prevent that ugly default
 * header.  We can enable and style when we need to.
 */
export default Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} hideNavBar={true} />
    <Scene key="home" component={Home} hideNavBar={true} />
    <Scene key="pointInTime" component={PointInTime} hideNavBar={true} />
    <Scene key="vispdat" component={Vispdat} hideNavBar={true} />
    <Scene key="refuse" component={Refuse} hideNavBar={true} />
  </Scene>
);
