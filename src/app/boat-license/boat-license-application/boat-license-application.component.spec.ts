import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatLicenseApplicationComponent } from './boat-license-application.component';

describe('BoatLicenseApplicationComponent', () => {
  let component: BoatLicenseApplicationComponent;
  let fixture: ComponentFixture<BoatLicenseApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatLicenseApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatLicenseApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
