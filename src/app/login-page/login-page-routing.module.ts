import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "./container/login-page.component";

const routes: Routes = [
	{
		path: "",
		component: LoginPageComponent,
		children: [
			{
				path: "home",
				loadChildren: () =>
					import("../home-page/home-page.module").then(
						(m) => m.HomePageModule
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LoginPageRoutingModule {}
