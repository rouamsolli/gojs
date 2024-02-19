import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowComponent } from './workflow/workflow.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
    { path: '',
 //loadComponent: ()=> import('./accueil/accueil.component').then(m => m.AccueilComponent)
 component:AccueilComponent
},
{
  path:'workflow',component:WorkflowComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
