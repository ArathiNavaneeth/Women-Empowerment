import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeloginComponent } from './traineelogin.component';

describe('TraineeloginComponent', () => {
  let component: TraineeloginComponent;
  let fixture: ComponentFixture<TraineeloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
