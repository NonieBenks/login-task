import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomMaterialModule } from "../shared/modules/custom-material.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [],
	imports: [CommonModule, CustomMaterialModule, ReactiveFormsModule],
})
export class ToolbarModule {}
