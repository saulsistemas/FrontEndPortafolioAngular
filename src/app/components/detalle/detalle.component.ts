import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { GlobalService } from 'src/app/services/global.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  url ="";
  //project:Project={ _id:'',name:'',description:'',category:'',year:0 ,langs:'',image:''};
  project:Project=new Project('','','','',0,'','')
  constructor(private _projectService:ProjectService,_global:GlobalService,private _router:Router,private _route:ActivatedRoute) { 
    this.url=_global.url;
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

  deleteProject(id){
    this._projectService.deleteProject(id).subscribe(
      response =>{
        console.log(response);
        
        if (response.project) {
          this._router.navigate(['/proyectos'])
        }
      },
      error=>{
        console.log(error);
        
      }
    )
  }

}
