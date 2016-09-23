import React from 'react';
import Home from './Home';
import Login from './Login';
import PointInTime from './PointInTime';
import PointInTimeBasic from './PointInTimeBasic';
import Refuse from './Refuse';
import RefuseBasic from './RefuseBasic';
import Sandbox from './Sandbox';
import TestRoute from './TestRoute';
import VispdatBasic from './VispdatBasic';
import VispdatHousing from './VispdatHousingHistory';
import VispdatRisk from './VispdatRisk';
import VispdatSocialization from './VispdatSocialization';
import VispdatWellness from './VispdatWellness';
import VispdatFollowUp from './VispdatFollowUp';
import {
  Actions,
  Scene,
  ActionConst
} from 'react-native-router-flux';
import { StyleSheet } from 'react-native';

const navStyles = Object.assign({}, StyleSheet.create({
  navBar: {
    backgroundColor: 'rgba(167,219,216,1)',
    borderBottomColor: 'rgba(243,134,48,1)',
    borderBottomWidth: 1,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  }
}));

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
export default Actions.create(
  <Scene key="root" defaultRoute="home">
    <Scene key="login" component={Login} />
    <Scene key="home" type={ActionConst.RESET} component={Home} initial={true} />
    <Scene
      key="PointInTimeBasic"
      component={PointInTimeBasic}
      onRight={() => { Actions.PointInTime(); }}
      rightTitle={"Next"}
    />
    <Scene
      key="PointInTime"
      component={PointInTime}
      title={"Point In Time"}
      onLeft={() => { Actions.PointInTimeBasic(); }}
      onRight={() => { console.log('submit form here'); }}
      leftTitle={"Back"}
      rightTitle={"Submit!"}
      navigationBarStyle={navStyles.navBar}
      titleStyle={navStyles.title}
    />
    <Scene
      key="VispdatBasic"
      component={VispdatBasic}
      onRight={() => { Actions.VispdatRisk(); }}
      rightTitle={"Next"}
    />
    <Scene
      key="VispdatRisk"
      component={VispdatRisk}
      onLeft={() => { Actions.Vispdat(); }}
      leftTitle={"Back"}
      onRight={() => { Actions.VispdatHousing(); }}
      rightTitle={"Next"}
    />
    <Scene
      key="VispdatHousing"
      component={VispdatHousing}
      onLeft={() => { Actions.VispdatRisk(); }}
      leftTitle={"Back"}
      onRight={() => { Actions.VispdatSocialization(); }}
      rightTitle={"Next"}
    />
    <Scene
      key="VispdatSocialization"
      component={VispdatSocialization}
      onLeft={() => { Actions.VispdatHousing(); }}
      leftTitle={"Back"}
      onRight={() => { Actions.VispdatWellness(); }}
      rightTitle={"Next"}
    />
    <Scene
      key="VispdatWellness"
      component={VispdatWellness}
      onLeft={() => { Actions.VispdatSocialization(); }}
    />
    <Scene
      key="VispdatFollowUp"
      component={VispdatFollowUp}
      onLeft={() => { Actions.VispdatWellness(); }}
      leftTitle={"Back"}
      onRight={() => { console.log('submit form here'); }}
      rightTitle={"Submit!"}
    />
    <Scene
      key="RefuseBasic"
      component={RefuseBasic}
      onRight={() => { Actions.Refuse(); }}
      rightTitle={"Next"}
    />
    <Scene
      key="Refuse"
      component={Refuse}
      onLeft={() => { Actions.RefuseBasic(); }}
      leftTitle={"Back"}
      onRight={() => { console.log('submit form here'); }}
      rightTitle={"Submit!"}
    />
    <Scene key="sandbox" component={Sandbox} />
    <Scene key="testRoute" component={TestRoute} hideNavBar={true} />
  </Scene>
);
