import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { GlobalService } from 'src/app/services/global.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects:Array<Project>;
  url ="";
  constructor(private _projectService:ProjectService,_global:GlobalService) { 
    this.url = _global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      (response:any)=>{
       
        this.projects = response.projects;
        console.log(response.projects);
        
      },
      error=>{
        console.log(error);
      }
    )
  }

}
