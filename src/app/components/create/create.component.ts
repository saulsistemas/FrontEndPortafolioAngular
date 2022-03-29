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
  constructor(private _projectService:ProjectService) { 
    _projectService.testService();
    this.title="Crear proyecto";
    this.project = new Project('','','','',2019,'','');
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){
   console.log(form);
    
  }

}
