import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../componentes/home/home.component';
import {PrincipalComponent} from '../componentes/principal/principal.component';

const routes: Routes = [{path:"", component:HomeComponent},
{path:"principal", component:PrincipalComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
