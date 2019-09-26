import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { File } from "@ionic-native/file/ngx";
import { DocumentViewer } from "@ionic-native/document-viewer/ngx";

import { HomePage } from "./home.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ])
  ],
  providers: [DocumentViewer, File],
  declarations: [HomePage]
})
export class HomePageModule {}
