import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import {
	DocumentViewer,
	DocumentViewerOptions
} from "@ionic-native/document-viewer/ngx";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"]
})
export class HomePage {
	constructor(private platform: Platform, private document: DocumentViewer) {}

	openLocalPdf() {
		console.log("hit the function");

		let baseUrl = "file:///android_asset/www";
		console.log("baseUrl: ", baseUrl);
		if (this.platform.is("ios")) {
			baseUrl = location.href.replace("/index.html", "");
			console.log("ios baseUrl: ", baseUrl);
		}
		console.log("final baseUrl: ", baseUrl);

		let file = "assets/test.pdf"; // baseUrl + "/assets/test.pdf";

		console.log("file url: ", file);
		let type = "application/pdf";
		const options: DocumentViewerOptions = {
			title: "My PDF"
		};

		this.document.canViewDocument(
			file,
			type,
			options,
			() => {
				//onpossible
				console.log("onpossible");
				this.document.viewDocument(file, type, options);
			},
			result => {
				//
				console.log("on missing app", result);
			},
			result => {
				//on
				console.log("on impossible", result);
			},
			error => {
				//on
				console.log("on error", error);
			}
		);
		console.log("got to the bottom");
	}
}
