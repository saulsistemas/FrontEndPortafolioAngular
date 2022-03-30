import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
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
  saveProject(project:Project):Observable<any>{
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'save-project',params,{headers:headers});
  }

  getProjects(){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'projects',{headers:headers});
  }
}
