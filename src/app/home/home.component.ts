import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { DriversService } from '../drivers/drivers.service';
import { Observable } from 'rxjs/Observable';
import { DriversLicenceRegistration } from '../drivers/models/driversLicenceRegistration';
import { Store } from '@ngrx/store';
import { State } from '../state';
import { LoadDriverViewDataAction } from '../drivers/+state/drivers.actions';
import * as DriverActions from '../drivers/+state/drivers.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngat-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  drivers$: Observable<DriversLicenceRegistration> ;
  drivers: DriversLicenceRegistration;
  imports = [
    CardComponent
  ];
  constructor(private driversService: DriversService, private store: Store<State>, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.driversService.getAllDriverRegoInfo().subscribe(drivers => {
      this.drivers = drivers;
    });

    this.activatedRoute.params.subscribe(params => {
      const id = +params['id']; // (+) converts string 'id' to a number
      if (id) {
        this.store.dispatch(new DriverActions.LoadDriverViewDataAction(id));
      }
    });
  }

}
