import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baseRoutes } from 'src/app/app-routes.config';
import { AuthService } from '../../../services/auth/auth.service';
import { SettingsService } from '../../../services/settings/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogged: boolean;
  userEmail: string;
  showRegisterButton: boolean;

  constructor(
    private authService: AuthService,
    private settingsService: SettingsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLogged = true;
        this.userEmail = auth.email;
      } else {
        this.isLogged = false;
        this.userEmail = '';
      }
    });
    this.showRegisterButton = this.settingsService.getSettings().allowRegistration;
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate([baseRoutes.login]);
  }
}
