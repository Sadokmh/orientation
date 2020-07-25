import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculScoreComponent } from './calcul-score.component';

describe('CalculScoreComponent', () => {
  let component: CalculScoreComponent;
  let fixture: ComponentFixture<CalculScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
