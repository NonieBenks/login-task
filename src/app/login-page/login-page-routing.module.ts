import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "./container/login-page.component";

const routes: Routes = [
	{
		path: "",
		component: LoginPageComponent,
	},
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LoginPageRoutingModule {}
