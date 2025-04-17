import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CreateStartupComponent } from './pages/create-startup/create-startup.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent }, 
    { path: 'create', component: CreateStartupComponent },
];
