import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import { XhrAuthCredentialProvider } from '../../common-util-module/interceptor/xhr-auth-credential-provider';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class DataTableConfig {//} implements XhrAuthCredentialProvider {
    private env: any;
    private restServicePath = '/rest/Compass/flowServices/restAPIs';
    private restUrl: string = null;
    private baseUrl: string = null;

    constructor(private http: HttpClient, @Inject(DOCUMENT) private document) {

        const protocol = document.location.protocol; //set default protocol here eg. http: or https:
        let restIP: string = null;
        try {
            // comment if IS server host name is not same as MWS server
            restIP = document.location.host.substring(0, document.location.host.indexOf(':'));
        } catch (err) {

        }
        this.restUrl = protocol + '//' + restIP + ':5559';
        this.baseUrl = protocol + '//' + restIP + ':8585';
    }

    get = (key: string): any => {
        return this.env[key];
    }

    getRestURL = (): string => {
        return this.getRestBaseURL() + this.restServicePath;
    }
    getRestBaseURL = (): string => {
        return (this.env.restUrl || this.restUrl);
    }
    getBaseURL = (): string => {
        return (this.env.baseUrl || this.baseUrl);
    }
    getAuthorizationCredentials = (): string => {
        try {
            return btoa(this.env.is_uname + ':' + this.env.is_pass);
        } catch (err) {

        }
        return null;
    }

    load = () => {
        this.http.get('/datatab/env.config.json').subscribe((response: any) => {
            this.env = response;
            console.log("Environment Response: ",this.env);
        }, (error: any): any => {
            return Observable.throw(error || 'Server error');
        });
    }
}
