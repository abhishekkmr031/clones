import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleComponent } from './Pages/google/google.component';
import { MicrosoftComponent } from './Pages/microsoft/microsoft.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleComponent,
    MicrosoftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
