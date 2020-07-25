import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CalculScoreComponent } from './calcul-score/calcul-score.component';
import { ScoreService } from '../score.service';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  choosedSection: any = null;

  constructor(public modalService: NgbModal, private scoreService: ScoreService) { }


  
  ngOnInit() {
  }


  open() {
    const modalRef = this.modalService.open(CalculScoreComponent, {});
    modalRef.componentInstance.name = 'calcul-score';
  }


  chooseSection = (section) => {
    this.choosedSection = section;
    this.scoreService.changeChoosedSection(section);
    console.log('ff');
    this.open();
    
  }


}
