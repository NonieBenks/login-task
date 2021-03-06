import { Component, OnInit } from "@angular/core";
import {
	FormControl,
	Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { AccountService } from "src/app/shared/services/account.service";

@Component({
	selector: "app-login-page",
	templateUrl: "./login-page.component.html",
	styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent
	implements OnInit {
	public hide = true;
	public param = { value: "world" };
	public wrongValueError: boolean = false;
	credentials$ = this.http.get(
		"/api/credentials"
	);

	constructor(
		public accountService: AccountService,
		private router: Router,
		private http: HttpClient
	) {}

	ngOnInit(): void {}

	public signIn(login, password) {
		this.credentials$.forEach(
			(credential) => {
				for (let key in credential) {
					if (
						credential[key].login ===
							login &&
						credential[key]
							.password === password
					) {
						this.accountService.setAppState(
							true
						);
						this.router.navigate([
							"/home",
						]);
						return true;
					}
					{
						this.wrongValueError = true;
					}
				}
			}
		);
	}
	public login = new FormControl("", [
		Validators.required,
		Validators.minLength(3),
	]);

	public password = new FormControl("", [
		Validators.required,
		Validators.minLength(4),
	]);
}
