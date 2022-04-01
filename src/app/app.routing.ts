import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EditComponent } from './components/edit/edit.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
    {path:'',component:AboutComponent},
    {path:'sobre-mi',component:AboutComponent},
    {path:'proyectos',component:ProjectsComponent},
    {path:'proyecto/:id',component:DetalleComponent},
    {path:'crear',component:CreateComponent},
    {path:'contacto',component:ContactComponent},
    {path:'editar/:id',component:EditComponent},
    {path:'**',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
