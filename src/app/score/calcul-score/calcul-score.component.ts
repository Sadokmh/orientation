import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ScoreService } from 'src/app/score.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calcul-score',
  templateUrl: './calcul-score.component.html',
  styleUrls: ['./calcul-score.component.scss']
})
export class CalculScoreComponent implements OnInit , OnDestroy{
  @Input() name;
  focus: any;
  focus1: any;
  sectionTitle:string = "Score";
  subscription: Subscription;
  choosedSection;
  formScore: FormGroup;
  showError: boolean;
  score: number;

  constructor(public activeModal: NgbActiveModal, private scoreService: ScoreService) {

    this.subscription = this.scoreService.getChoosedSectionSub().subscribe((section) => {
      this.choosedSection = section;
      console.log(this.choosedSection);
    });
   }

  ngOnInit() {
    this.initForm();
    console.log(this.choosedSection);
    
  }

  initForm() {
    this.formScore = new FormGroup({
      math: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      sc: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      ph: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      fr: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      en: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      mg: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      tech: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      ar: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      hg: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      eco: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      gest: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      tic: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      bd: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      algo: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      philo: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      sp: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      th: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      pr: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      ep: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
      phs: new FormControl(null, {validators: [Validators.max(20), Validators.min(0)]}),
    });
  }


  calculMoy() {
      const math= this.formScore.value!.math;
      const sc= this.formScore.value!.sc
      const ph= this.formScore.value!.ph;
      const fr= this.formScore.value!.fr;
      const en= this.formScore.value!.en;
      const mg= this.formScore.value!.mg;
      const tech= this.formScore.value!.tech;
      const ar= this.formScore.value!.ar;
      const hg= this.formScore.value!.hg;
      const eco= this.formScore.value!.eco;
      const gest= this.formScore.value!.gest;
      const tic= this.formScore.value!.tic;
      const bd= this.formScore.value!.bd;
      const algo= this.formScore.value!.algo;
      const philo= this.formScore.value!.philo;
      const sp= this.formScore.value!.sp;
      const th= this.formScore.value!.th;
      const ep= this.formScore.value!.ep;
    
      let SCORE=0;

    if (this.formScore.invalid) {this.showError = true; return;}

    switch (this.choosedSection) {
      case 'math' :
        if (!mg || !math || !ph || !sc || !fr || !en) {this.showError = true; return;}
        if (this.showError) this.showError = !this.showError;
        SCORE = (4*mg) + (2*math) + (1.5*ph) + (0.5*sc) + fr +en;
        break;
      case 'sciences':
        if (!mg || !math || !sc || !ph || !fr || !en) {this.showError = true; return;}
        if (this.showError) this.showError = !this.showError;
        SCORE = (4*mg) + (math) + (1.5*sc) + (1.5*ph) + fr + en;
        break;
      case 'tech':
        if (!mg || !math || !tech || !ph || !fr || !en) {this.showError = true; return;}
        if (this.showError) this.showError = !this.showError;
        SCORE = (4*mg) + (1.5*tech) + (1.5*math) + (ph) + fr + en;
        break;
      case 'lettre': 
        if (!mg || !ar || !philo || !hg || !fr || !en) {this.showError = true; return;}
        if (this.showError) this.showError = !this.showError;
        SCORE = (4*mg) + (1.5*ar) + (1.5*philo) + (hg) + fr + en;
        break;
      case 'eco': 
      if (!mg || !math || !eco || !gest || !hg || !en) {this.showError = true; return;}
        if (this.showError) this.showError = !this.showError;
        SCORE = (4*mg) + (1.5*eco) + (1.5*gest) + (0.5*math) + (0.5*hg) + fr + en;
        break;
      case 'info':
        if (!mg || !math || !ph || !algo || !tic || !bd || !fr || !en) {this.showError = true; return;}
        if (this.showError) this.showError = !this.showError;
        SCORE = (4*mg) + (1.5*math) + (1.5*algo) + (0.5*ph) + (0.25*(tic+bd)) + fr + en;
        break;
      case 'sport':
        if (!mg || !th || !ph || !sc || !fr || !en || !philo || !sp || !ep) {this.showError = true; return;}
        if (this.showError) this.showError = !this.showError;
        SCORE = (4*mg) + (1.5*sc) + (0.5*th) + (0.5*sp) + (0.5*ep) + (0.5*ph) + en + fr + (0.5*philo);
        break;
      default: 0;

    };

    this.score = SCORE;
    console.log(SCORE);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
