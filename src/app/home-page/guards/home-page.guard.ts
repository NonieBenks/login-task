import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "../../shared/services/account.service";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class HomePageGuard implements CanActivate {
	constructor(
		private router: Router,
		private accountService: AccountService
	) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | boolean {
		if (this.accountService.loggedIn) {
			return true;
		}
		return false;
	}
}
