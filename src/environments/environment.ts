// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'weatherapp-e16eb',
    appId: '1:303493934657:web:f5f702ba02180e666be0c0',
    storageBucket: 'weatherapp-e16eb.appspot.com',
    apiKey: 'AIzaSyAmPnMPhv_EH1Us130_dKH_Y2hVMCulQpk',
    authDomain: 'weatherapp-e16eb.firebaseapp.com',
    messagingSenderId: '303493934657',
  },
  production: false,
  weatherApiBaseUrl:'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'weatherapi-com.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: 'faff476cacmsh376b8091303fc0bp1e42c6jsna50f4aacaecf'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
