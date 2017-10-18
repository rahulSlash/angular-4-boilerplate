import { Injectable, Inject } from '@angular/core';
import { SERVICE_CONSTANTS, ServiceConstantConfig } from '../app.constants';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpClient {
  constructor(
      private http: Http,
      @Inject(SERVICE_CONSTANTS) private _ServiceConstants: ServiceConstantConfig
    ) {}

  private readJWT(){
      return 'asnkdciopjavdvasdqewfasvczxv';
  };
  private setHeaders(){
      let headers = new Headers();
      headers.append('jwt', this.readJWT());
      headers.append('Content-Type', 'application/json');
      return headers;
  };
  private updateUrl(url){
    return this._ServiceConstants.apiUrl + '' + url;
  };

  public get(url) {
    return this.http.get(
        this.updateUrl(url),
        {
            headers: this.setHeaders()
        })
        .map( res => res.json() )
        .catch( this.catchErr );
  }

  public post(url, data?:{}) {
    return this.http.post(
         this.updateUrl(url),
         data, 
         {
            headers: this.setHeaders(),
         })
         .map( res => res.json() )
         .catch( this.catchErr );
  }

  public catchErr(error: Response){
    return Observable.throw(error || "Something went wrong. Please be patient.");
  }
}