import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogged: boolean;

  constructor(
    private snackbarService: SnackbarService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getAuth().subscribe((auth) => {
      auth ? (this.isLogged = true) : (this.isLogged = false);
    });
  }

  onLogoutClick() {
    this.authService.logout();
  }
}
