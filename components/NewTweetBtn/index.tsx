import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const NewTweetBtn = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('NewTweet');
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <AntDesign name="plus" size={28} color={'#fff'} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default NewTweetBtn;
