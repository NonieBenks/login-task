import { Injectable, Input } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class AccountService {
	constructor() {}
	@Input() result: Boolean = false;
	public wrongValue: string = "";
	login(username, password) {
		if (username.value === "test" && password.value === "test") {
			this.result = true;
			this.wrongValue = "";
			return true;
		}
		this.wrongValue = "Wrong login or password";
		this.result = false;
		return false;
	}
}
