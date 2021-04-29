import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { TranslateService } from "@ngx-translate/core";

import { AccountService } from "src/app/shared/services/account.service";

@Component({
	selector: "app-toolbar",
	templateUrl: "./toolbar.component.html",
	styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
	public languages = [
		{ title: "Українська", code: "ua" },
		{ title: "English", code: "en" },
		{ title: "Française", code: "fr" },
		{ title: "Русский", code: "ru" },
	];

	constructor(
		public router: Router,
		public accountService: AccountService,
		public translate: TranslateService
	) {
		translate.addLangs(["en", "fr", "ru", "ua"]);
		translate.setDefaultLang("fr");
		translate.use("en");
	}

	ngOnInit(): void {}

	public logout() {
		this.accountService.loggedIn = false;
		this.router.navigate(["/login"]);
	}
	public useLanguage(language: string): void {
		this.translate.use(language);
	}
}
