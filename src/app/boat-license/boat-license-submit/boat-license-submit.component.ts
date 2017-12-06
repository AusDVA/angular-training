import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store} from '@ngrx/store';
import { State } from '../models/state';
import { Router, ActivatedRoute } from '@angular/router';
import { BoatLicenseApplication } from '../models/boat-license-application.model';
import * as BoatLicenseActions from '../+state/boat-license.actions';
import * as BoatLicenseSelectors from '../+state/boat-license.selectors';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ngat-boat-license-submit',
  templateUrl: './boat-license-submit.component.html',
  styleUrls: ['./boat-license-submit.component.scss']
})
export class BoatLicenseSubmitComponent implements OnInit {
  applicationID: number;
  

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>,
    private router: Router,
    private activatedRoute: ActivatedRoute 
    
  ) { }

  ngOnInit() {

this.activatedRoute.params.subscribe(params => {
      const id = +params['id']; // (+) converts string 'id' to a number
      if (id) {
        this.store.dispatch(new BoatLicenseActions.GetAction(id));
      }
    });
  }

}
