import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomePageGuard } from "../home-page/guards/home-page.guard";
import { BaseComponent } from "./container/base.component";

const routes: Routes = [
	{
		path: "",
		component: BaseComponent,
		children: [
			{
				path: "login",
				loadChildren: () =>
					import("../login-page/login-page.module").then(
						(m) => m.LoginPageModule
					),
			},
			{
				path: "home",
				loadChildren: () =>
					import("../home-page/home-page.module").then(
						(m) => m.HomePageModule
					),
				canActivate: [HomePageGuard],
			},
			{
				path: "",
				redirectTo: "login",
			},

			{
				path: "**",
				redirectTo: "login",
			},
		],
	},
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BaseRoutingModule {}
