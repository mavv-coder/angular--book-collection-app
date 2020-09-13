import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';
import { baseRoutes } from '../../../app-routes.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private snackbarService: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.router.navigate([baseRoutes.dashboard]);
      }
    });
  }

  onSubmit() {
    console.log(123);
    this.authService
      .login(this.email, this.password)
      .then((res) => {
        this.router.navigate([baseRoutes.dashboard]);
      })
      .catch((err) => {
        if (!this.snackbarService.getflashWorking()) {
          this.snackbarService.showFlashMessage(
            'Invalid email or password',
            'alert-error'
          );
        }
      });
  }
}
