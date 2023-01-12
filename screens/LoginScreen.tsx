import React from 'react';
import { TextInput, Text, View, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';
import { Card } from 'react-native-elements';
import { magic } from '../magicConfig'

const REDIRECT_URI = '';


export function LoginScreen() {

  const [email, onChangeEmail] = React.useState('anderson.pablo02@gmail.com');


  /**
   *Google sign in
   * */
  const magicGoogleSignIn = async () => {
    const res = await magic.oauth.loginWithPopup({ provider: 'google', redirectURI: REDIRECT_URI });
    alert(JSON.stringify(res));
  }


  async function loginGoogle() {
    try {
      const res = await magic.oauth.loginWithPopup({
        provider: 'google',
        redirectURI: REDIRECT_URI,
      });

      console.log('RESPONSE ==>', res);
    } catch (error) {
      console.log('ERROR ==>', error);
    }
  }

  /**
   *Apple sign in
   * */
  const magicAppleSignIn = async () => {
    const res = await magic.oauth.loginWithPopup({ provider: 'apple', redirectURI: 'MagicBareRnExample://' });
    alert(JSON.stringify(res));
  }

  /**
   * regular sign in
   * */
  const login = async () => {
    try {
      await magic.auth.loginWithEmailOTP({ email: email });
      const res = await magic.user.getMetadata();
      alert(JSON.stringify(res));
    } catch (err) {
      console.log(err);
    }
  };


  /**
   * getMetadata()
   * */
  const getMetadata = async () => {
    const res = await magic.user.getMetadata();
    alert(JSON.stringify(res));
  }


  /**
   * IsLoggedIn
   * */
  const isLoggedIn = async () => {
    const res = await magic.user.isLoggedIn();
    alert(JSON.stringify(res));
  }

  const logout = async () => {
    const isLoggedOut = await magic.user.logout();
    alert(isLoggedOut);
  };

  const TouchableButton = (props: { handler: () => void, title: String }) => (
    <View style={styles.actionContainer}>
      <Pressable style={styles.button} onPress={() => props.handler()}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  )

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled">
        {/* Magic Sign-in */}
        <Card>
          <Card.Title>Passwordless Login</Card.Title>
          <View style={styles.loginContainer}>
            <View style={styles.emailContainer}>
              <Text>
                Email:
              </Text>
              <TextInput
                style={styles.TextInputContainer}
                onChangeText={text => onChangeEmail(text)}
                value={email}

              />
            </View>
          </View>
          <TouchableButton handler={() => login()} title="Login" />
        </Card>

        {/* Google Sign in */}
        <Card>
          <Card.Title>Google Login</Card.Title>
          <TouchableButton handler={() => magicGoogleSignIn()} title="Login" />
        </Card>

        <Card>
          <Card.Title>Google Login Anderson</Card.Title>
          <TouchableButton handler={loginGoogle} title="Login" />
        </Card>

        {/* Apple Sign in */}
        {/* <Card>
          <Card.Title>Apple Login</Card.Title>
          <TouchableButton handler={() => magicAppleSignIn()} title="Login" />
        </Card> */}

        {/* Is Logged In */}
        <Card>
          <Card.Title>Is Logged In</Card.Title>
          <TouchableButton handler={() => isLoggedIn()} title="isLoggedIn" />
        </Card>

        {/* metaData */}
        <Card>
          <Card.Title>Metadata</Card.Title>
          <TouchableButton handler={() => getMetadata()} title="metadata" />
        </Card>

        {/* Logout */}
        <Card>
          <Card.Title>Logout</Card.Title>
          <TouchableButton handler={() => logout()} title="Logout" />
        </Card>
      </ScrollView>
    </View>
  );
}
