import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Feed from '../components/Feed';
import NewTweetBtn from '../components/NewTweetBtn';

function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Feed />
      <NewTweetBtn />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});
