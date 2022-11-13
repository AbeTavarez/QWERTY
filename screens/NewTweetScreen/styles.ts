import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export const styles = StyleSheet.create({
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
    padding: 10
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
  },
  image: {
    // width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    resizeMode: 'cover'
  },
  imageContainer: {
    backgroundColor: 'red'
  },
  buttonsContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.dark.background
  }
});