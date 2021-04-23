import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomMaterialModule } from "../shared/modules/custom-material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginPageComponent } from "./container/login-page.component";
import { LoginPageRoutingModule } from "./login-page-routing.module";

@NgModule({
	declarations: [LoginPageComponent],
	imports: [
		CommonModule,
		CustomMaterialModule,
		ReactiveFormsModule,
		LoginPageRoutingModule,
	],
})
export class LoginPageModule {}
