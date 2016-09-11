import { StyleSheet } from 'react-native';
import { MKColor, mdl } from 'react-native-material-kit';

const styles = Object.assign({}, StyleSheet.create({

  textfieldWithFloatingLabel: {
    height: 48,
    marginTop: 10
  }

}));

export default mdl.Textfield.textfieldWithFloatingLabel()
  .withPlaceholder('Username')
  .withStyle(styles.textfieldWithFloatingLabel)
  .withHighlightColor(MKColor.Pink)
  .build();
