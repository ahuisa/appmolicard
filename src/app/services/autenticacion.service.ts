import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as variables from '../utils/variables';

@Injectable({
	providedIn: 'root'
})
export class AutenticacionService {

	constructor(private http: HttpClient) { }

	login(username: string, password: string) {
		console.log(username);
		return this.http.post<any>(variables.url_validar_login, { 'email': username, 'password': password },
			{observe: 'response'})
			.pipe(map(res => {
				if (res && res.headers) {
					let token = res.headers.get('Authorization');
					localStorage.setItem('token', 'prueba');
				}
				return res;
		}));
	}

}
