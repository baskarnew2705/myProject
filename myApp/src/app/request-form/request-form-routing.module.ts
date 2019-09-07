import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestFormComponent } from './components/request-form/request-form.component';


const routes: Routes = [
  {path : '', pathMatch : 'full', component : RequestFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestFormRoutingModule { }
