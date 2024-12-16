import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LayoutConHeaderComponent} from './layout-con-header/layout-con-header.component';
import {RegisterComponent} from './register/register.component';
import {ListUsersComponent} from './list-users/list-users.component';
import {isLoggedGuard} from './services/guards/is-logged.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {
    path: "", component: LayoutConHeaderComponent, canActivate: [isLoggedGuard], children: [
      {path: "list-users", component: ListUsersComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
