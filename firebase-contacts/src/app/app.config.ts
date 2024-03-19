import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideClientHydration(),
      importProvidersFrom(
        provideFirebaseApp(() =>
         initializeApp({
          "projectId":"contacts-56edf",
          "appId":"1:67464451115:web:bee20ad0decd65f0c0c66e",
          "storageBucket":"contacts-56edf.appspot.com",
          "apiKey":"AIzaSyD3SI3MZHCpgtsczyxasUdTiUJxIOmeuXU",
          "authDomain":"contacts-56edf.firebaseapp.com",
          "messagingSenderId":"67464451115"
        }))),
        importProvidersFrom(provideFirestore(() => getFirestore()))
      ],
};
