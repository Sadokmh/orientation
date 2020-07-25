import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  choosedSection = new Subject<string>();

  constructor() { }

  getChoosedSectionSub() {
    return this.choosedSection.asObservable();
  }

  changeChoosedSection(newSection: string) {
    setTimeout(() => {
      this.choosedSection.next(newSection);
    },50)
    console.log(newSection);
  }
}
