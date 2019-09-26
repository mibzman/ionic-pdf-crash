import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import {
	DocumentViewer,
	DocumentViewerOptions
} from "@ionic-native/document-viewer/ngx";
import { File } from "@ionic-native/file/ngx";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"]
})
export class HomePage {
	constructor(
		private platform: Platform,
		private document: DocumentViewer,
		private file: File
	) {}

	openLocalPdf() {
		console.log("hit the function");

		let filepath = this.file.applicationDirectory;
		// console.log("filepath: ", filepath);

		let baseUrl = "file:///android_asset/www";
		// console.log("baseUrl: ", baseUrl);
		if (this.platform.is("ios")) {
			baseUrl = location.href.replace("/index.html", "");
			console.log("ios baseUrl: ", baseUrl);
		}
		// console.log("final baseUrl: ", baseUrl);

		// var array1 = [
		// 	"assets/test.pdf",
		// 	"/assets/test.pdf",
		// 	"www/assets/test.pdf",
		// 	"www/assets/test.pdf",
		// 	"ionic://localhost/assets/test.pdf",
		// 	"ionic://localhost/www/assets/test.pdf",
		// 	baseUrl + "/assets/test.pdf",
		// 	filepath + "www/assets/test.pdf"
		// ];

		// var that = this;
		// array1.forEach(function(element) {
		// 	console.log(element);
		// 	that.doDoc(element);
		// });

		this.doDoc(filepath + "www/assets/test.pdf");
	}

	doDoc(file: string) {
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
				console.log("onpossible!!!!!!!!!!!!!!!!!!");
				debugger;
				this.document.viewDocument(
					file,
					type,
					options,
					result => {
						console.log("has been shown");
						debugger;
						let two = 1 + 1;
					},
					result => {
						console.log("has been closed");
						debugger;
						let two = 1 + 1;
					},
					result => {
						console.log("error: ", result);
						debugger;
						let two = 1 + 1;
					}
				);
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
	}
}
