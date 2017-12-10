import { Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { CardComponent } from './card/card.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NewCardComponent } from './new-card/new-card.component';

//New
// import { AuthGuard } from '../services/auth-guard.service';

//TODO

//canActivate: [AuthGuard] to the privates Routes

export const routes: Routes = [
    // { path: 'user',  component: UserprofileComponent,canActivate: [ IsLoggedInService ]  },

    /*
      / -> Landing si no está logado
      / -> mi perfil si está logado

      /login -> Componente login
      /signup -> Componente Signup

      /card/:id -> Componente detalle de card
      /card/:id/edit -> Component editar card
      /card/new -> Conponente upload

      /search/:query -> Conponente search

      /user/:id -> Component public profile (si está logado y es mi perfil, un enalce a editar)
      /user/edit -> Component editar usuario
    */

    { path: 'login',  component: LoginComponent },
    { path: 'signup',  component: SignupComponent },
    { path: 'card/new', component: NewCardComponent, pathMatch: 'full' },
    { path: 'card/:id', component: CardComponent },
    { path: 'card/:id/edit', component: EditCardComponent },

    { path: 'user/:id', component: ProfileComponent },
    { path: 'user/edit', component: EditProfileComponent },
    //{ path: 'search/:tag', component: SearchComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
