import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DxPopoverModule } from 'devextreme-angular';
import { SortablejsModule } from 'ngx-sortablejs';
import devextremeAjax from 'devextreme/core/utils/ajax';
import { sendRequestFactory } from './dx-http-client-helper';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DxPopoverModule,
    SortablejsModule.forRoot({ animation: 250, swapThreshold: .65 }),
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { 
  constructor(httpClient: HttpClient) {
  	devextremeAjax.inject({ sendRequest: sendRequestFactory(httpClient) });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/