import { Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NewCardComponent } from './new-card/new-card.component';

export const routes: Routes = [

    { path: 'login',  component: LoginComponent },
    { path: 'signup',  component: SignupComponent },
    { path: 'card/new', component: NewCardComponent, pathMatch: 'full' },
    { path: 'card/:id', component: CardComponent },
    { path: 'card/:id/edit', component: EditCardComponent },
    { path: 'user/:id', component: ProfileComponent },
    { path: 'user/:id/edit', component: EditProfileComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
