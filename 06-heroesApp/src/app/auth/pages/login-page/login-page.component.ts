import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(
    private AuthService: AuthService,
    private router: Router
  ) { }

  onLogin(): void {
    this.AuthService.login('jorhgmail.com', '1234455')
      .subscribe(user => {
        this.router.navigate(['/'])
      })
  }
}
