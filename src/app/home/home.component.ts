import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { DriversService } from '../drivers/drivers.service';
import { Observable } from 'rxjs/Observable';
import { DriversLicenceRegistration } from '../drivers/models/driversLicenceRegistration';
import { Store } from '@ngrx/store';
import { State } from '../state';
import { LoadDriverViewDataAction } from '../drivers/+state/drivers.actions';
import * as DriverActions from '../drivers/+state/drivers.actions';
import * as DriverSelectors from '../drivers/+state/drivers.selectors';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngat-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  drivers: DriversLicenceRegistration;
  imports = [
    CardComponent
  ];
  constructor(private driversService: DriversService, private store: Store<State>, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.driversService.getAllDriverRegoInfo().subscribe(drivers => {
      this.drivers = drivers;
    });
    // this.store.dispatch(new DriverActions.GetAllAction(null));

    // this.store.select(DriverSelectors.selectDriversLicence).subscribe(drivers => {
    //   this.drivers = drivers;
    // });

  }

}
