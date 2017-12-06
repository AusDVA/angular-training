import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { DriversService } from '../drivers/drivers.service';

@Component({
  selector: 'ngat-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imports = [
    CardComponent
  ];
  constructor(private driversService: DriversService) { }

  ngOnInit() {
    // getDriverRegos$ = this.driversService.getAllDriverRegoInfo();
  }

}
