import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AccountService } from "src/app/shared/services/account.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-login-page",
	templateUrl: "./login-page.component.html",
	styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
	public hide = true;
	public param = { value: "world" };

	public languages = [
		{ title: "Українська", code: "ua" },
		{ title: "English", code: "en" },
		{ title: "Française", code: "fr" },
		{ title: "Русский", code: "ru" },
	];

	constructor(
		public accountService: AccountService,
		private router: Router,
		translate: TranslateService
	) {
		translate.setDefaultLang("fr");
		//translate.use("fr");
	}

	ngOnInit(): void {}

	public login = new FormControl("", [
		Validators.required,
		Validators.minLength(3),
	]);

	public password = new FormControl("", [
		Validators.required,
		Validators.minLength(4),
	]);

	public getErrorLogin() {
		if (this.login.hasError("required")) {
			return "You must enter a login";
		}
	}

	public getErrorPassword() {
		if (this.password.hasError("required")) {
			return "You must enter a password";
		}
	}
}
