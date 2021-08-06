import { Injectable } from "@angular/core";
import { ICredential } from "../interfaces/credential.interface";
import { CREDENTIALS } from "../mocks/mock-credentials";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class AccountService {
	public loggedIn: boolean = false;
	public wrongValueError: string = "";
	credentials$ = this.http.get(
		"api/credentials"
	);

	constructor(private http: HttpClient) {}

	public getCredentials() {
		return this.credentials$;
	}
}
