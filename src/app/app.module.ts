import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from "ag-grid-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableListComponent } from './table-list/table-list.component';
//import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http'; 

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpModule,//HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
