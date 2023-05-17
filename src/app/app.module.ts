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

@NgModule({
  declarations: [ AppComponent, GoogleComponent, MicrosoftComponent, QuizGameComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgxWheelModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
