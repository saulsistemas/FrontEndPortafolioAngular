import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  url:string="";
  constructor(private _global:GlobalService) { 
    this.url=_global.url;
  }
  makeFileRequest(url:string,params:Array<string>,files: Array<File>, name:string){
    return new Promise(function(resolve, reject){
      var formData = new FormData();
      var xhr = new XMLHttpRequest();
      for (let i = 0; i < files.length; i++) {
        formData.append(name,files[i],files[i].name)
      }
      xhr.onreadystatechange = function(){
        if (xhr.readyState ==4) {
          if (xhr.status ==200) {
            resolve(JSON.parse(xhr.response))
          }else{
            reject(xhr.response);
          }
        }
      }
      xhr.open('POST',url,true);
      xhr.send(formData);
    })
  }
}
