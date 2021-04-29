import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./container/home-page.component";

const routes: Routes = [
	{
		path: "",
		component: HomePageComponent,
		children: [
			{
				path: "login",
				loadChildren: () =>
					import("../login-page/login-page.module").then(
						(m) => m.LoginPageModule
					),
			},
		],
	},
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomePageRoutingModule {}
