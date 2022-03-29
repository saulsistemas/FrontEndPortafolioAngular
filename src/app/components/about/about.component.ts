import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title:string="";
  subtitle:string="";
  email:string="";
  constructor() { 
    this.title="SAUL SANTAMARIA";
    this.subtitle="Desarrollador Web y Soporte Tecnico";
    this.email="santamariramos18@hotmail.com"
  }

  ngOnInit(): void {
  }

}
