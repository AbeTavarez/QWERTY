import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.tint,
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontWeight: 'bold',
  }
});

export default styles;