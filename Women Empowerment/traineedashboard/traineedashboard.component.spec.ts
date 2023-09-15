import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineedashboardComponent } from './traineedashboard.component';

describe('TraineedashboardComponent', () => {
  let component: TraineedashboardComponent;
  let fixture: ComponentFixture<TraineedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineedashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
