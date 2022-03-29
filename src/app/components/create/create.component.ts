import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title:string="";
  project:any;
  status:string="";
  constructor(private _projectService:ProjectService) { 
    _projectService.testService();
    this.title="Crear proyecto";
    this.project = new Project('','','','',2019,'','');
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
   this._projectService.saveProject(this.project).subscribe(
     response=>{
       if (response.project) {
         this.status ='success';
         form.reset();
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
