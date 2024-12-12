import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LayoutConHeaderComponent} from './layout-con-header/layout-con-header.component';
import {PanelControlComponent} from './panel-control/panel-control.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {
    path: "app", component: LayoutConHeaderComponent, children: [
      {path: '', redirectTo: 'panel-de-control', pathMatch: 'full'},
      {path: "panel-de-control", component: PanelControlComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
