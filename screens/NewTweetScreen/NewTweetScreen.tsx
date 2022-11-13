import { useNavigation } from '@react-navigation/native';
import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
  Image,
  Platform
} from 'react-native';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { EvilIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import ProfilePicture from '../../components/ProfilePicture';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';

function NewTweetScreen() {
  const [tweet, setTweet] = useState('');
  const [image, setImage] = useState('');

  const navigation = useNavigation();

  const onPostPress = () => {
    console.log(`
    ${tweet}
    ${image}
    `);
  };

  const onPickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onClose = () => navigation.navigate('Root');

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER  */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <EvilIcons name="close" size={30} color={Colors.light.tint} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPostPress}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      {/* IMAGE AND TEXT INPUT  */}
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
        </View>
      </View>
      {/* SELECTED IMAGE  */}
      <View style={styles.imageContainer}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
      {/* BOTTOM BUTTONS  */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onPickImage}>
          <EvilIcons name="image" size={36} color={Colors.light.tint} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default NewTweetScreen;
