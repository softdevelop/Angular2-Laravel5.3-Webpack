import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routing';

import {Api} from "./services/api";

import { AppComponent }             from './app.component';
import { PageNotFoundComponent }    from "./components/page-not-found/page-not-found.component";
import { FirstComponent }           from "./components/first/first.component";
import { SecondComponent }          from "./components/second/second.component";
import { ProgressBar }              from "./components/ui/progress-bar/progress-bar.component";

import { AuthorListComponent }      from "./components/authors/list/AuthorListComponent";
import { AuthorEditComponent }      from "./components/authors/edit/AuthorEditComponent";
import { AuthorCreateComponent }    from "./components/authors/create/AuthorCreateComponent";
import { AuthorDetailComponent }    from "./components/authors/detail/AuthorDetailComponent";
import { AuthorFormComponent}       from "./components/authors/form/AuthorFormComponent";

import { FileUploadService } from "./services/file-upload/file-upload.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        FirstComponent,
        SecondComponent,
        AuthorListComponent,
        AuthorEditComponent,
        AuthorCreateComponent,
        AuthorDetailComponent,
        AuthorFormComponent,
        ProgressBar
    ],
    schemas:     [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        Api,
        FileUploadService
    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule {}
