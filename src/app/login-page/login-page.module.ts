import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomMaterialModule } from "../shared/modules/custom-material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginPageRoutingModule } from "./login-page-routing.module";
import { LoginPageComponent } from "./container/login-page.component";
import { TranslateModule } from "@ngx-translate/core";
@NgModule({
	declarations: [LoginPageComponent],
	imports: [
		CommonModule,
		CustomMaterialModule,
		ReactiveFormsModule,
		TranslateModule,
		LoginPageRoutingModule,
	],
})
export class LoginPageModule {}
