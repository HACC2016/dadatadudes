import { StyleSheet } from 'react-native';
import { MKButton, MKColor } from 'react-native-material-kit';
import { Actions } from 'react-native-router-flux';

const styles = Object.assign({}, StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
}));

export default MKButton.coloredFlatButton()
  .withText('Submit')
  .withBackgroundColor(MKColor.Pink)
  .withRippleColor(MKColor.Blue)
  .withTextStyle(styles.buttonText)
  .withOnPress(Actions.home)
  .build();
