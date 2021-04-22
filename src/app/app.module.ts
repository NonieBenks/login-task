import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./container/app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginPageComponent } from "./login-page/container/login-page.component";
import { LoginPageRoutingModule } from "./login-page/login-page-routing.module";

@NgModule({
	declarations: [AppComponent, HomePageComponent, LoginPageComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		LoginPageRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
