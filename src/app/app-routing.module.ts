import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleComponent } from './Pages/google/google.component';
import { BackgroundComponent } from './Pages/background/background.component';
import { CssPractise1Component } from './Pages/css-practise1/css-practise1.component';
import { QuizGameComponent } from './Pages/quiz-game/quiz-game.component';

const routes: Routes = [
  {
    path:'',
    component:QuizGameComponent
  },
  {
    path:'google',
    component:GoogleComponent
  },
  {
    path:'background',
    component:BackgroundComponent
  },
  {
    path:'css-practise',
    component:CssPractise1Component
  },
  {
    path:'game',
    component:QuizGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
