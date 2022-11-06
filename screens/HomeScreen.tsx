import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Tweet from '../components/Tweet';
import { tweets } from '../data/tweets';
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Tweet tweet={tweets[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});
