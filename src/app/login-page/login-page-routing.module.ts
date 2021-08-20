import { NgModule } from "@angular/core";
import {
	Routes,
	RouterModule,
} from "@angular/router";
import { LoginPageComponent } from "./container/login-page.component";
import { HomePageGuard } from "../home-page/guards/home-page.guard";
import { CommonModule } from "@angular/common";

const routes: Routes = [
	{
		path: "",
		component: LoginPageComponent,
		children: [
			{
				path: "home",
				loadChildren: () =>
					import(
						"../home-page/home-page.module"
					).then(
						(m) => m.HomePageModule
					),
				canActivate: [HomePageGuard],
			},
		],
	},
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
	],
	exports: [RouterModule],
})
export class LoginPageRoutingModule {}
