import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength: string = '';

  calculateStrength() {
    const password = this.password;

    if (password.length === 0) {
      this.passwordStrength = '';
    } else if (password.length < 8) {
      this.passwordStrength = 'easy';
    } else if (
      /[a-zA-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      this.passwordStrength = 'strong';
    } else {
      this.passwordStrength = 'medium';
    }
  }
}
