import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageRoutingModule } from "./home-page-routing.module";
import { CustomMaterialModule } from "../shared/modules/custom-material.module";
import { HomePageComponent } from "./container/home-page.component";
import { HomePageGuard } from "./guards/home-page.guard";

@NgModule({
	declarations: [HomePageComponent],
	imports: [
		CommonModule,
		HomePageRoutingModule,
		CustomMaterialModule,
		HomePageRoutingModule,
	],
	providers: [HomePageGuard],
})
export class HomePageModule {}
