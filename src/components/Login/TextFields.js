import { StyleSheet } from 'react-native';
import { MKTextField } from 'react-native-material-kit';

const styles = Object.assign({}, StyleSheet.create({
  textfield: {
    height: 28,
    marginTop: 32
  },

  textfieldWithFloatingLabel: {
    height: 48,
    marginTop: 10
  }

}));

export default MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Username')
  .withStyle(styles.textfieldWithFloatingLabel)
  .withFloatingLabelFont({
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '200'
  })
  .build();
