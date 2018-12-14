import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthServiceService} from './auth-service.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthServiceService) {
  }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }
  }
}
