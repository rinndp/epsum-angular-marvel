import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {LoginService} from '../auth/login.service';

export const isLoggedGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoginService);
  const router = inject(Router);

  if(loginService.getUser()) {
    return true
  }
  else {
    router.navigate(['/login']);
    return false;
  }
};
