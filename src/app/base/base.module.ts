import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToolbarComponent } from "../toolbar/container/toolbar.component";
import { BaseComponent } from "./container/base.component";
import { BaseRoutingModule } from "./base-routing.module";
import { CustomMaterialModule } from "../shared/modules/custom-material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
	declarations: [ToolbarComponent, BaseComponent],
	imports: [
		CommonModule,
		BaseRoutingModule,
		ReactiveFormsModule,
		CustomMaterialModule,
		TranslateModule,
	],
})
export class BaseModule {}
