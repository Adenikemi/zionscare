import { provideRouter, Routes, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { ServicesComponent } from './features/services/services.component';

export const routes: Routes = [
    {   path: "",
        component: HomeComponent
    },
    { path: "services", component: ServicesComponent },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent }
];

export const appConfig = {
    providers: [
      provideRouter(
        routes,
        withInMemoryScrolling({
          anchorScrolling: 'enabled',
        })
      ),
    ],
  };
  