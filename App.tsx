import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { LoginScreen } from './screens/LoginScreen'
import { Magic } from '@magic-sdk/react-native-bare'
import { OAuthExtension } from "@magic-ext/react-native-bare-oauth";
import { magic } from './magicConfig'
export default function App() {

  console.log(`new OAuthExtension() ${new OAuthExtension()}`);

  // const magic = new Magic('pk_live_9F72504AB1E9BAEE', {
  //   extensions: [new OAuthExtension()],
  // });

  return (
    <SafeAreaProvider>
      <magic.Relayer />
      <LoginScreen />
    </SafeAreaProvider>
  )
}