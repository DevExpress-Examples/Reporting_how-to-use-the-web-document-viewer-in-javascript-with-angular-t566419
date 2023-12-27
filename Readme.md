<!-- default badges list -->
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T566419)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# Reporting for Angular - How to integrate the Web Document Viewer in Angular App

This example shows how to incorporate  Web Document Viewer into a client-side app built with Angular. The example consists of two parts:

- A server (back-end) ASP.NET Core project that enables [cross-domain requests (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Access-Control-Allow-Origin) and implements a custom web report storage.

- An [Angular](https://angular.io/) front-end client application.

## Run the Example

Perform the following steps to run this example:

1. Open the back-end project solution (**ServerSideApp.sln**) in Visual Studio and run the project.
2. Navigate to the **angular-document-viewer** folder that is the client part's root folder.
3. Open the console and run the following command to download packages:

    ```npm install```

4. Run the command to compile and start the client part:

    ```npm start```

5. Point your browser to [http://localhost:4200/](http://localhost:4200/) to see the result.

![](images/screenshot.png)


## Upgrade the Project

Before you run the project, verify the DevExpress version. If necessary, upgrade it to the DevExpress version you're currently using. Make sure to use the same version of DevExpress components for both Front-end and Back-end applications.

Follow these steps to update the project:

### Upgrade the server-side app

Use the [DevExpress Project Converter](https://docs.devexpress.com/ProjectConverter/2529/project-converter) to upgrade assembly references for the back-end project solution. You can open the project in Visual Studio and navigate to the Menu: Extensions -> DevExpress -> Project Converter. Select the required version and upgrade the project.

### Upgrade the client-side app

Navigate to the `package.json` file in the **angular-document-viewer** folder and change all DevExpress script versions to the version you're using on the server side. For instance, if you're using v23.2.3, modify the package.json file as follows:

```
    {
        ...
        "dependencies": {
            ...
            "devexpress-reporting-angular": "23.2-stable",
            "@devexpress/analytics-core": "23.2-stable", 
            "devextreme": "23.2-stable",
            "devextreme-angular": "23.2-stable"
        },
        ...
    }
```

Open the **angular-document-viewer** folder in the console and run the command to download updated packages:

```
npm install
```


## Documentation 

* [Create an Angular Front-End Application with a Document Viewer](https://docs.devexpress.com/XtraReports/119430)
* [Document Viewer Server-Side Application (ASP.NET Core)](https://docs.devexpress.com/XtraReports/400197) 

* [Document Viewer's Server-Side Configuration (ASP.NET MVC)](https://docs.devexpress.com/XtraReports/118597)
* [Troubleshooting](https://docs.devexpress.com/XtraReports/401726/web-reporting/general-information/troubleshooting)
* [Reporting Application Diagnostics](https://docs.devexpress.com/XtraReports/401687/web-reporting/general-information/application-diagnostics)

## More Examples

* [How to use the Web Report Designer in JavaScript with Angular](https://github.com/DevExpress-Examples/how-to-use-the-web-report-designer-in-javascript-with-angular-t566422)
