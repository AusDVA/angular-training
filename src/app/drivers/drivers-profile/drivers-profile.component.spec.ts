import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversProfileComponent } from './drivers-profile.component';

describe('DriversProfileComponent', () => {
  let component: DriversProfileComponent;
  let fixture: ComponentFixture<DriversProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
