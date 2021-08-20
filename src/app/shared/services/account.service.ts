import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class AccountService {
	public wrongValueError: string = "";
	public statusStorage = window.localStorage;
	public loggedIn: boolean = false;
	credentials$ = this.http.get(
		"api/credentials"
	);

	constructor(private http: HttpClient) {}

	public setAppState(userStatus) {
		this.loggedIn = userStatus;
		const jsonLoggedIn = JSON.stringify(
			this.loggedIn
		);
		localStorage.setItem(
			"loggedIn",
			jsonLoggedIn
		);
	}

	public getAppState() {
		return (
			localStorage.getItem("loggedIn") ===
			"true"
		);
	}

	public getCredentials() {
		return this.credentials$;
	}
}
