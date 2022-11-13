import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput
} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { EvilIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';
import { useState } from 'react';

function NewTweetScreen() {
  const [tweet, setTweet] = useState('');
  const [imageURL, setImageURL] = useState('');

  const onPostPress = () => {
    console.log(`
    ${tweet}
    ${imageURL}
    `);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <EvilIcons name="close" size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={onPostPress}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.newTweetContainer}>
        <ProfilePicture image="https://avatars.githubusercontent.com/u/39171176?v=4" />

        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="What's happening?"
            style={styles.tweetInput}
            multiline={true}
            numberOfLines={3}
            value={tweet}
            onChangeText={setTweet}
          />
          <TextInput
            placeholder="Image Picker"
            style={styles.imageUrl}
            value={imageURL}
            onChangeText={setImageURL}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default NewTweetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-start',
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15
  },
  button: {
    backgroundColor: Colors.light.tint,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15
  },
  inputsContainer: {
    marginLeft: 10
  },
  tweetInput: {
    fontSize: 22,
    height: 200,
    maxHeight: 300
  },
  imageUrl: {
    fontSize: 18
  }
});
