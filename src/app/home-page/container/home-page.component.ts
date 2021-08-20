import {
	Component,
	OnInit,
	ViewChild,
} from "@angular/core";

@Component({
	selector: "app-home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
	@ViewChild("myPinch", { static: false })
	myPinch;
	myFullresImage = "assets/CV.jpg";
	imgWidth = "900px";
	constructor() {}

	zoomIn() {
		this.myPinch.zoomIn();
	}
	ngOnInit(): void {}
}
