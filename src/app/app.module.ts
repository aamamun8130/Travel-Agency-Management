import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
//import { ReactiveFormsModule} from '@angular/forms'
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import{ NgxWebstorageModule} from 'ngx-webstorage';
@NgModule({
  declarations: [
    AppComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot()
    
  ],
  providers: [DataService],
  bootstrap: [
    AppComponent,
    routingComponent
  ]
})
export class AppModule { }
