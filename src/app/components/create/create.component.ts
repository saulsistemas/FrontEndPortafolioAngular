import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { GlobalService } from 'src/app/services/global.service';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title:string="";
  project:any;
  status:string;
  public save_project: any;
  fileToUpload:Array<File> =[];
  url:any="";
  constructor(private _projectService:ProjectService, private _uploadService:UploadService, private _url:GlobalService) { 
    _projectService.testService();
    this.title="Crear proyecto";
    this.url = _url.url;
    this.project = new Project('','','','',2019,'','');
  }

  ngOnInit(): void {
  }
  fileChangeEvent(fileInput:any){
    console.log(fileInput);
    this.fileToUpload = <Array<File>>fileInput.target.files;
  }
  onSubmit(form:any){
   this._projectService.saveProject(this.project).subscribe(
     response=>{
       if (response.project) {
         
         //LLAMAMOS AL SERVICIO . METODO (URL/:ID,[],METODO, NOMBRE CAMPO)
         this._uploadService.makeFileRequest(this.url+"upload-image/"+response.project._id,[],this.fileToUpload,'image')
         .then((result:any)=>{
           this.save_project = response.project._id;
           this.status ='success';
            console.log(this.save_project._id);
           form.reset();
          },error=>{
            console.log(error);
          });
         
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
