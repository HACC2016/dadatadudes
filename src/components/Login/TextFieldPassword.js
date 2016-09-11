import { StyleSheet } from 'react-native';
import { MKColor, mdl } from 'react-native-material-kit';

const styles = Object.assign({}, StyleSheet.create({

  textfieldWithFloatingLabel: {
    height: 48,
    marginTop: 10
  }

}));

export default mdl.Textfield.textfieldWithFloatingLabel()
  .withSecureTextEntry(true)
  .withPlaceholder('Password')
  .withHighlightColor(MKColor.Pink)
  .withStyle(styles.textfieldWithFloatingLabel)
  .build();
