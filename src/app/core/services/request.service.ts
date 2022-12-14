import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url_api = environment.url_api;
  constructor(private Http: HttpClient) { }

  get(url: string){
    url = `${this.url_api}${url}`
    return this.Http.get(url);
  }
  post(url: string, data: any){
    url = `${this.url_api}${url}`
    return this.Http.post(url, data);
  }

  put(url: string, data: any){
    url = `${this.url_api}${url}`
    return this.Http.put(url, data);
  }
}
