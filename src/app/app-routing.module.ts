import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "login",
		loadChildren: () =>
			import("./login-page/login-page.module").then(
				(m) => m.LoginPageModule
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { relativeLinkResolution: "corrected" }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
