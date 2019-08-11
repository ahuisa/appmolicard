import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';
import { first } from 'rxjs/operators';	

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	submitted = false;
	loading = false;
	error = '';
	
	constructor(
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private autenticacionService: AutenticacionService
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	get f() { return this.loginForm.controls; }
	
	onSubmit() {
		this.submitted = true;
		this.error = '';
		if (this.loginForm.invalid) {
			return;
		}
		this.loading = true;
		this.autenticacionService.login(this.f.username.value, this.f.password.value)
			.pipe(first())
			.subscribe(
					data => {
						this.router.navigate(['/beneficios']);
					},
					error => {
						this.error = 'Usuario no existe';
						this.loading = false;
					});
	}
}
