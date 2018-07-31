// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyDD9kMSoJkvMqFulNNUeZk5d0PIaa_x6gc",
    authDomain: "clientpanelprod-1fc68.firebaseapp.com",
    databaseURL: "https://clientpanelprod-1fc68.firebaseio.com",
    projectId: "clientpanelprod-1fc68",
    storageBucket: "clientpanelprod-1fc68.appspot.com",
    messagingSenderId: "872425914994"
  },
  version: env.npm_package_version,
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ]
};