import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  //importamos provider http cliente
  //que es el provedor del http cliente, que obtienen una configuracion para especificar como se realizaran las peticiones HTTP
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch())]
};
