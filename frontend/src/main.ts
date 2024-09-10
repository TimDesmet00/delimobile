import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AcceuilComponent } from './app/acceuil/acceuil.component';
import { AboutComponent } from './app/about/about.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ContactComponent } from './app/contact/contact.component';

console.log('AcceuilComponent:', AcceuilComponent);
console.log('AboutComponent:', AboutComponent);
console.log('GalleryComponent:', GalleryComponent);
console.log('ContactComponent:', ContactComponent);

const routes = [
  { path: 'home', component: AcceuilComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

bootstrapApplication(AcceuilComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));