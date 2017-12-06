import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './lib/material/material.module';
import { DriversModule } from './drivers/drivers.module';
import { BoatLicenseModule } from './boat-license/boat-license.module';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    MaterialModule, DriversModule, BoatLicenseModule,
    HttpClientModule,
    NoopAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 30
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
