import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

function NewTweetScreen() {
  return (
    <View style={styles.container}>
      <Text>New Tweet</Text>
    </View>
  );
}

export default NewTweetScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});
