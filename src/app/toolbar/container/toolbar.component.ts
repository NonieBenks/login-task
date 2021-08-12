import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { TranslateService } from "@ngx-translate/core";

import { AccountService } from "src/app/shared/services/account.service";
import { HttpClient } from "@angular/common/http";

@Component({
	selector: "app-toolbar",
	templateUrl: "./toolbar.component.html",
	styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit {
	languages$ = this.http.get("/api/languages");
	public langItems: any;

	constructor(
		public router: Router,
		public accountService: AccountService,
		public translate: TranslateService,
		public http: HttpClient
	) {
		translate.addLangs([
			"en",
			"fr",
			"ru",
			"ua",
		]);
		translate.use("ua");
	}

	ngOnInit(): void {
		this.languages$.subscribe((languages) => {
			this.langItems = languages;
		});
	}

	public logout() {
		this.accountService.loggedIn = false;
		this.router.navigate(["/login"]);
	}
	public useLanguage(language: string): void {
		this.translate.use(language);
	}
}
