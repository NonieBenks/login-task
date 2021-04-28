import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class AccountService {
	public loggedIn: Boolean = false;
	public wrongValueError: string = "";

	constructor() {}

	public login(username: string, password: string) {
		if (username === "test" && password === "test") {
			this.loggedIn = true;
			this.wrongValueError = "";
			return true;
		}
		this.loggedIn = false;
		this.wrongValueError = "Wrong login or password";
	}
}
