import { Injectable } from '@angular/core';
//import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { DataTableConfig } from '../config/data-config';

@Injectable({
  providedIn: 'root'
})
export class TableListService {

  constructor(private http: Http){//, private httpHeaders: HttpHeaders) {

  }
  
  baseUrl: string = 'http://192.168.9.83:5555/rest/Default/webservice/logWS';

  getData() {
    let username: string = 'devuser';
    let password: string = 'abc@123';
    let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    console.log("Test service: ", headers);
    return this.http.get('http://192.168.10.148:5559/rest/Default/webservice/logWS' , {headers: headers}).toPromise();
      // .map((response: Response) => response.json(),
      // error => console.log(error));
  }

//   getData = (payload: any): Promise<any> => {
//     var url = 'http://192.168.10.148:5559/rest/Default/webservice/logWS';
//     let username: string = 'devuser';
//     let password: string = 'abc@123';
//     let headers: Headers = new Headers();
//     headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
//     headers.append("Content-Type", "application/json");
//     return this.http.get(url, {headers: headers}).toPromise();
//     //      console.log("Test data; ");
//     //return this.http.get('http://192.168.10.148:5559/rest/Default/webservice/logWS').toPromise();
//   }

}
