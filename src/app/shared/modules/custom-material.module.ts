import { NgModule } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";

const MATERIAL_MODULES = [
	MatCardModule,
	MatFormFieldModule,
	MatButtonModule,
	MatInputModule,
	MatIconModule,
];

@NgModule({
	exports: MATERIAL_MODULES,
})
export class CustomMaterialModule {}
