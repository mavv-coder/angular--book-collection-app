import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';
import { baseRoutes } from '../../../app-routes.config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private snackbarService: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService
      .register(this.email, this.password)
      .then((res) => {
        this.snackbarService.showFlashMessage(
          'You are now registered and logged in',
          'alert-success'
        );
        this.router.navigate([baseRoutes.dashboard]);
      })
      .catch((error) =>
        this.snackbarService.showFlashMessage(error.message, 'alert-error')
      );
  }
}
