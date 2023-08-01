import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [
    "../../node_modules/devextreme/dist/css/dx.common.css",
    "../../node_modules/devextreme/dist/css/dx.light.css",
    "../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.common.css",
    "../../node_modules/@devexpress/analytics-core/dist/css/dx-analytics.light.css",
    "../../node_modules/devexpress-reporting/dist/css/dx-webdocumentviewer.css"
  ]
})
export class AppComponent {
  title = 'DXReportViewerSample';
  reportUrl: string = 'Products';
  hostUrl: string = 'http://localhost:54114/';
  invokeAction: string = "/WebDocumentViewer/Invoke";
}
