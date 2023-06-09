import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import {  ProjectlistComponent } from './projectlist/projectlist.component'
// import { BarChartComponent } from "./bar-chart/bar-chart.component"
import { CurrentDetailsComponent } from './current-details/current-details.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [

      {path:'',component:LoginPageComponent},
      {path:'chart',component:CurrentDetailsComponent},
      {path:'add-project',component :AddProjectComponent}, 
      {path:'list',component : ProjectlistComponent}
       
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
