import { View, Text, StyleSheet } from 'react-native';
import { CustomBtn } from '../CustomComponent/CustomBtn';

const EmptyCart = ({ navi }) => {
  const loginHandler = () => navi.navigate('profile', { screen: 'login' });

  const signupHandler = () => navi.navigate('profile', { screen: 'sign' });

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Your EccentricStore cart is Empty ...</Text>
      <View style={styles.btnContainer} ><CustomBtn prop={{ onPressFun: loginHandler, btnTitle: "Login" }} /></View>
      <CustomBtn prop={{ onPressFun: signupHandler, btnTitle: "Sign Up" }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {

    padding: 25,
    flex: 1,
    backgroundColor: '#fdfdfd',
    justifyContent:'center'
  },
  title: {
    fontSize: 34,
    color: '#000',
    marginBottom:30
  },
  btnContainer:{
    marginBottom:15
  }
})
export default EmptyCart;