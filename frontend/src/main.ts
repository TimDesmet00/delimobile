import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, Route } from '@angular/router';
import { AcceuilComponent } from './app/acceuil/acceuil.component';
import { AboutComponent } from './app/about/about.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ContactComponent } from './app/contact/contact.component';

// console.log('AcceuilComponent:', AcceuilComponent);
// console.log('AboutComponent:', AboutComponent);
// console.log('GalleryComponent:', GalleryComponent);
// console.log('ContactComponent:', ContactComponent);

const routes: Routes = [
  { path: 'home', component: AcceuilComponent } as Route,
  { path: 'about', component: AboutComponent } as Route,
  { path: 'gallery', component: GalleryComponent } as Route,
  { path: 'contact', component: ContactComponent } as Route,
  { path: '', redirectTo: '/home', pathMatch: 'full' } as Route,
  { path: '**', redirectTo: '/home', pathMatch: 'full' } as Route
];

bootstrapApplication(AcceuilComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));