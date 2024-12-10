import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {LayoutConHeaderComponent} from './layout-con-header/layout-con-header.component';
import {PanelControlComponent} from './panel-control/panel-control.component';
import {RegisterComponent} from './register/register.component';
import {ListaUsuariosComponent} from './lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {
    path: "app", component: LayoutConHeaderComponent, children: [
      {path: '', redirectTo: 'panel-de-control', pathMatch: 'full'},
      {path: "panel-de-control", component: PanelControlComponent},
      {path: "lista-usuarios", component: ListaUsuariosComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
