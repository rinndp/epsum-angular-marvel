import { HttpInterceptorFn } from '@angular/common/http';
import {LoginService} from '../auth/login.service';
import {inject} from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let currentUserService = inject(LoginService);
  let currentUser = currentUserService.getUser();

  const reqClone = req.clone({
    setHeaders: {
      "Content-type": "application/json",
      //"Authorization": `Bearer ${currentUser?.username}`
    }
  })

  return next(reqClone);
};
