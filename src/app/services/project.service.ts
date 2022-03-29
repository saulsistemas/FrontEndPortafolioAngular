import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url:string="";
  constructor( private _http:HttpClient,private _global:GlobalService) {
    this.url=_global.url;
    console.log(_global.url);
    
  }

  testService(){
    //return 'probando el servicio de angular'
    console.log('desde el servicio');
    
  }
}
