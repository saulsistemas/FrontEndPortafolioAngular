import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { GlobalService } from 'src/app/services/global.service';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  title:string="";
  project:any;
  status:string;
  public save_project: any;
  fileToUpload:Array<File> =[];
  url:any="";
  constructor(private _projectService:ProjectService, private _uploadService:UploadService, private _url:GlobalService,private _router:Router,private _route:ActivatedRoute) { 
    _projectService.testService();
    this.title="Editar proyecto";
    this.url = _url.url;

  }
  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params["id"];
      this.getProject(id);
      
    })
  }
  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      response =>{
        this.project = response.project;
        console.log(response.project);
      },
      error=>{
        console.log(error);
      }
    )
  }
  fileChangeEvent(fileInput:any){
    console.log(fileInput);
    this.fileToUpload = <Array<File>>fileInput.target.files;
  }
  onSubmit(form:any){
    this._projectService.updateProject(this.project).subscribe(
      response=>{
        if (response.project) {
          if (this.fileToUpload.length>=1) {
            //LLAMAMOS AL SERVICIO . METODO (URL/:ID,[],METODO, NOMBRE CAMPO)
            this._uploadService.makeFileRequest(this.url+"upload-image/"+response.project._id,[],this.fileToUpload,'image')
            .then((result:any)=>{
              this.save_project = response.project._id;
              this.status ='success';
              console.log(result);
              form.reset();
            },error=>{
              console.log(error);
            });
          }else{
              this.save_project = response.project._id;
              this.status ='success';
          }
          
          
        }else{
           this.status ='failed';
        }
        
      },
      error =>{
        console.log(error);
        
      }
    )
     
   }
}
