import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';

// Importez votre composant AccueilComponent
import { AcceuilComponent } from './app/acceuil/acceuil.component';

const bootstrap = () => bootstrapApplication(AcceuilComponent, config);

export default bootstrap;