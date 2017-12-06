import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngat-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() name;
  @Input() dateOfBirth;
  @Input() id;

  constructor() { }

  ngOnInit() {
  }

}
