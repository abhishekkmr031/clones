import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleComponent } from './Pages/google/google.component';
import { MicrosoftComponent } from './Pages/microsoft/microsoft.component';
import { QuizGameComponent } from './Pages/quiz-game/quiz-game.component';
import { FormsModule } from '@angular/forms';
import { NgxWheelModule } from 'ngx-wheel';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './Pages/modal/modal.component';
import { BackgroundComponent } from './Pages/background/background.component';
import { StreetlightComponent } from './Pages/streetlight/streetlight.component';
import { CssPractise1Component } from './Pages/css-practise1/css-practise1.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';

@NgModule({
  declarations: [ AppComponent, GoogleComponent, MicrosoftComponent, QuizGameComponent, ModalComponent,
     BackgroundComponent, StreetlightComponent, CssPractise1Component, NavbarComponent, FooterComponent,
     SidebarComponent, LoginComponent, RegisterPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgxWheelModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
