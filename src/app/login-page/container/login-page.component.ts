import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AccountService } from "src/app/shared/services/account.service";

@Component({
	selector: "app-login-page",
	templateUrl: "./login-page.component.html",
	styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
	hide = true;
	login = new FormControl("", [Validators.required, Validators.minLength(3)]);
	passcode = new FormControl("", [
		Validators.required,
		Validators.minLength(4),
	]);
	constructor(
		public accountService: AccountService,
		private router: Router
	) {}

	ngOnInit(): void {}

	getErrorLogin() {
		if (this.login.hasError("required")) {
			return "You must enter a login";
		}
	}
	getErrorPasscode() {
		if (this.passcode.hasError("required")) {
			return "You must enter a password";
		}
	}
}
