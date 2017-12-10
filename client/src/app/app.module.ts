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
import { CardsService } from "../services/cards.service";
import { DashboardComponent } from './dashboard/dashboard.component';
// import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { NewCardComponent } from './new-card/new-card.component';
import { FilterPipe } from './filter.pipe';

import { FileSelectDirective } from "ng2-file-upload";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    // MydashboardComponent,
    CardComponent,
    ProfileComponent,
    EditProfileComponent,
    EditCardComponent,
    NewCardComponent,
    FilterPipe,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, CardsService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
