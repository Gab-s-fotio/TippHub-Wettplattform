import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email && this.password) {
      this.router.navigate(['/home']);
    } else {
      alert('Bitte beide Felder ausfüllen');
    }
  }

  onRegister() {
    if (this.email && this.password) {
      this.router.navigate(['/home']);
    } else {
      alert('Bitte beide Felder ausfüllen');
    }
  }



}


