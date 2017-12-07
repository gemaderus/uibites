import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { routes } from './routes';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from "../services/auth.service";
import { ProfileService } from "../services/profile.service";
import { DashboardService } from "../services/dashboard.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    MydashboardComponent,
    // CardComponent,
    ProfileComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, DashboardService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
