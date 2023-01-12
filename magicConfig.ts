import { Magic } from '@magic-sdk/react-native-bare';
import { OAuthExtension } from '@magic-ext/react-native-bare-oauth';

const API_KEY = ''
export const magic = new Magic(API_KEY, {
  extensions: [new OAuthExtension()],
});
