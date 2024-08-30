import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// Supprimez cette ligne
// import { AppComponent } from './app/app.component';

// Si vous avez un autre composant principal, importez-le ici
import { AcceuilComponent } from './app/acceuil/acceuil.component';

bootstrapApplication(AcceuilComponent, appConfig)
  .catch((err) => console.error(err));