import { CanActivate } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "../../shared/services/account.service";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class HomePageGuard
	implements CanActivate {
	constructor(
		private accountService: AccountService
	) {}
	canActivate(): Observable<boolean> | boolean {
		if (
			this.accountService.statusStorage.getItem(
				"loggedIn"
			) === "true"
		) {
			return true;
		}
		return false;
	}
}
