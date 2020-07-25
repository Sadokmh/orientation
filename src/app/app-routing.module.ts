import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path:'home',
    component: LandingComponent
  },
  {
    path: 'score',
    component: ScoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
