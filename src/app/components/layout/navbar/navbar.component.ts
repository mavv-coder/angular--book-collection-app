import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baseRoutes } from 'src/app/app-routes.config';
import { AuthService } from '../../../services/auth/auth.service';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogged: boolean;
  userEmail: string;

  constructor(
    private snackbarService: SnackbarService,
    private authService: AuthService,
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
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate([baseRoutes.login]);
  }
}
