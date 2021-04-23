import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "login",
		pathMatch: "full",
	},
	{
		path: "login",
		loadChildren: () =>
			import("./login-page/login-page.module").then(
				(m) => m.LoginPageModule
			),
	},
	{
		path: "home",
		loadChildren: () =>
			import("./home-page/home-page.module").then(
				(m) => m.HomePageModule
			),
	},
	{
		path: "**",
		redirectTo: "home",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
