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
    borderBottomWidth: 1
  },
  title: {
    color: 'white',
    fontWeight: 'bold'
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
    <Scene
      key="login"
      title={"Login"}
      component={Login}
      navigationBarStyle={navStyles.navBar}
      titleStyle={navStyles.title}
    />
    <Scene
      title={"Home"}
      key="home"
      type={ActionConst.RESET}
      component={Home}
      initial={true}
      navigationBarStyle={navStyles.navBar}
      titleStyle={navStyles.title}
    />
    <Scene
      key="PointInTimeBasic"
      title={"Basic Information"}
      component={PointInTimeBasic}
      onBack={() => { Actions.home(); }}
      onLeft={() => { Actions.home(); }}
      leftTitle={"Back"}
      onRight={() => { Actions.PointInTime(); }}
      rightTitle={"Next"}
      navigationBarStyle={navStyles.navBar}
      titleStyle={navStyles.title}
    />
    <Scene
      key="PointInTime"
      component={PointInTime}
      title={"Point In Time"}
      onLeft={() => { Actions.PointInTimeBasic(); }}
      leftTitle={"Back"}
      navigationBarStyle={navStyles.navBar}
      titleStyle={navStyles.title}
      // rightTitle={"Submit!"}
      // onRight={() => { console.log('submit form here'); Actions.home(); }}
    />
    <Scene
      key="VispdatBasic"
      title={"Basic Information"}
      component={VispdatBasic}
      onBack={() => { Actions.home(); }}
      onLeft={() => { Actions.home(); }}
      leftTitle={"Back"}
      onRight={() => { Actions.VispdatRisk(); }}
      rightTitle={"Next"}
      navigationBarStyle={navStyles.navBar}
      titleStyle={navStyles.title}
    />
    <Scene
      title={"Vispdat Risk"}
      navigationBarStyle={navStyles.navBar}
      titleStyle={navStyles.title}
      key="VispdatRisk"
      component={VispdatRisk}
      onLeft={() => { Actions.Vispdat(); }}
      leftTitle={"Back"}
      onRight={() => { Actions.VispdatHousing(); }}
      rightTitle={"Next"}
    />
    <Scene
      title={"Vispdat Housing"}
      navigationBarStyle={navStyles.navBar}
      titleStyle={navStyles.title}
      key="VispdatHousing"
      component={VispdatHousing}
      onLeft={() => { Actions.VispdatRisk(); }}
      leftTitle={"Back"}
      onRight={() => { Actions.VispdatSocialization(); }}
      rightTitle={"Next"}
    />
    <Scene
      title={"Vispdat Socilization"}
      navigationBarStyle={navStyles.navBar}
      titleStyle={navStyles.title}
      key="VispdatSocialization"
      component={VispdatSocialization}
      onLeft={() => { Actions.VispdatHousing(); }}
      leftTitle={"Back"}
      onRight={() => { Actions.VispdatWellness(); }}
      rightTitle={"Next"}
    />
    <Scene
      title={"Vispdat Wellness"}
      navigationBarStyle={navStyles.navBar}
      titleStyle={navStyles.title}
      key="VispdatWellness"
      component={VispdatWellness}
      onLeft={() => { Actions.VispdatSocialization(); }}
      onRight={() => { Actions.VispdatFollowUp(); }}
      rightTitle={"Next"}
    />
    <Scene
      title={"Vispdat Follow Up"}
      navigationBarStyle={navStyles.navBar}
      titleStyle={navStyles.title}
      key="VispdatFollowUp"
      component={VispdatFollowUp}
      onLeft={() => { Actions.VispdatWellness(); }}
      leftTitle={"Back"}
      // onRight={() => { console.log('submit form here'); Actions.home(); }}
      // rightTitle={"Submit!"}
    />
    <Scene
      title={"Basic Information"}
      navigationBarStyle={navStyles.navBar}
      titleStyle={navStyles.title}
      key="RefuseBasic"
      component={RefuseBasic}
      onBack={() => { Actions.home(); }}
      onLeft={() => { Actions.home(); }}
      leftTitle={"Back"}
      onRight={() => { Actions.Refuse(); }}
      rightTitle={"Next"}
    />
    <Scene
      title={"Information about the Person"}
      navigationBarStyle={navStyles.navBar}
      titleStyle={navStyles.title}
      key="Refuse"
      component={Refuse}
      onLeft={() => { Actions.RefuseBasic(); }}
      leftTitle={"Back"}
      // onRight={() => { console.log('submit form here'); Actions.home(); }}
      // rightTitle={"Submit!"}
    />
    <Scene key="sandbox" component={Sandbox} />
    <Scene key="testRoute" component={TestRoute} hideNavBar={true} />
  </Scene>
);
