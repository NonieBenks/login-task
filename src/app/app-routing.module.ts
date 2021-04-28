import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		loadChildren: () =>
			import("./base/base.module").then((m) => m.BaseModule),
	},
	{
		path: "**",
		redirectTo: "",
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { relativeLinkResolution: "corrected" }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
