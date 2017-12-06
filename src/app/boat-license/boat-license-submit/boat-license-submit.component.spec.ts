import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatLicenseSubmitComponent } from './boat-license-submit.component';

describe('BoatLicenseSubmitComponent', () => {
  let component: BoatLicenseSubmitComponent;
  let fixture: ComponentFixture<BoatLicenseSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatLicenseSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatLicenseSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
