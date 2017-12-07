import { Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

export const routes: Routes = [
    // { path: 'user',  component: UserprofileComponent,canActivate: [ IsLoggedInService ]  },
    { path: 'login',  component: LoginComponent,  },
    { path: 'signup',  component: SignupComponent,  },
    { path: 'dashboard', component: DashboardComponent,  },
    { path: 'dashboard/mydashboard', component: MydashboardComponent,  },
    // { path: 'dashboard/edit-card/:id', component: CardComponent },
    // { path: 'dashboard/delete-card/:id', component: CardComponent },
    // { path: 'edit-card/:id', component: CardComponent },
    { path: 'profile/edit-profile', component: EditProfileComponent },
    // { path: 'profile/delete', component: HomeComponent },
    { path: 'profile/:id', component: ProfileComponent },
    // { path: '/:id', component: ProfileComponent },


    // { path: 'signup',  component: SignupComponent,  },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
