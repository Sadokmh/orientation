import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { LandingComponent } from './landing/landing.component';
import { CalculScoreComponent } from './score/calcul-score/calcul-score.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    LandingComponent,
    CalculScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CalculScoreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
