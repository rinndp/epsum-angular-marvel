import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { LayoutConHeaderComponent } from './layout-con-header/layout-con-header.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi} from '@angular/common/http';
import {authInterceptor} from './services/interceptors/auth.interceptor';
import { ListUsersComponent } from './list-users/list-users.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { ModalAddUserComponent } from './modal-add-user/modal-add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelControlComponent,
    LayoutConHeaderComponent,
    RegisterComponent,
    ListUsersComponent,
    BottomNavComponent,
    ModalAddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor]),
    ),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
