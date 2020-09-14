import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { baseRoutes } from '../../app-routes.config';
import { SettingsService } from '../../services/settings/settings.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterGuard implements CanActivate {
  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) {}

  canActivate(): boolean {
    if (this.settingsService.getSettings().allowRegistration) {
      return true;
    } else {
      this.router.navigate([baseRoutes.login]);
      return false;
    }
  }
}
