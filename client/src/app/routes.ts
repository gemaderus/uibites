import { Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';



export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    // { path: 'user',  component: UserprofileComponent,canActivate: [ IsLoggedInService ]  },
    { path: 'login',  component: LoginComponent,  },
    { path: 'signup',  component: SignupComponent,  },
    { path: 'mydashboard', component: DashboardComponent,  },
    // { path: 'signup',  component: SignupComponent,  },
    { path: '**', redirectTo: '' }
];
