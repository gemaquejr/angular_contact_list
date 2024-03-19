import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseProviders: EnvironmentProviders = importProvidersFrom(
    provideFirebaseApp(() =>
     initializeApp({
      "projectId":"contacts-56edf",
      "appId":"1:67464451115:web:bee20ad0decd65f0c0c66e",
      "storageBucket":"contacts-56edf.appspot.com",
      "apiKey":"AIzaSyD3SI3MZHCpgtsczyxasUdTiUJxIOmeuXU",
      "authDomain":"contacts-56edf.firebaseapp.com",
      "messagingSenderId":"67464451115"
      }),
    ),
    provideFirestore(() => getFirestore()),
);

export { firebaseProviders };