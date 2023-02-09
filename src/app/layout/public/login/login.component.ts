import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.createLoginForm();
    return;
  }
  private createLoginForm(): FormGroup {
    return this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public submitForm() {
    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach((control) => {
        control.markAllAsTouched();
      });
      return;
    }

    this.authService.signIn(this.user).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/datos-generales']);
        return;
      },
      error: (err) => {
        alert(err.error.message);
        return;
      },
    });
  }

  public get f(): any {
    return this.loginForm.controls;
  }
}
