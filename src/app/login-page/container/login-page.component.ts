import { Component, OnInit } from "@angular/core";
import {
	FormControl,
	Validators,
	FormsModule,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AccountService } from "src/app/shared/services/account.service";
import { TranslateService } from "@ngx-translate/core";
import { ICredential } from "../../shared/interfaces/credential.interface";
import { HttpClient } from "@angular/common/http";
import { tap, first } from "rxjs/operators";

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

	public languages = [
		{ title: "Українська", code: "ua" },
		{ title: "English", code: "en" },
		{ title: "Française", code: "fr" },
		{ title: "Русский", code: "ru" },
	];

	constructor(
		public accountService: AccountService,
		private router: Router,
		private http: HttpClient,
		translate: TranslateService
	) {
		translate.setDefaultLang("fr");
	}

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
						this.accountService.loggedIn = true;
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
