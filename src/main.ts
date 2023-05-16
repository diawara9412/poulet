import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import {provideHttpClient} from '@angular/common/http';
import {defineCustomElements} from '@ionic/pwa-elements/loader'

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()), 
    // provideFunctions(() => getFunctions()), 
    // provideMessaging(() => getMessaging()), 
    provideStorage(() => getStorage())),
    provideRouter(routes),
    provideHttpClient(),
  ],

});
defineCustomElements(window)