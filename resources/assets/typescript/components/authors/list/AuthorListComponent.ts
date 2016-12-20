import {Component} from '@angular/core';
import {Api} from "../../../services/api";
import {AuthorRemoveComponent} from "../remove/AuthorRemoveComponent";
//import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'authors',
    //templateUrl: './index.html',
    template: require('./index.html'),
    styleUrls: ['./css/list.css'],
    //directives: [ROUTER_DIRECTIVES, AuthorRemoveComponent]
    directives: [AuthorRemoveComponent]
})

export class AuthorListComponent
{
    authors: Object;
    selectedAuthor: Object = {};
    constructor(
        private router: Router, 
        private _api: Api
    ) {
        //this.authors = this._api.authors$;
        //this._api.getAuthors();
    }
    ngOnInit(): void {
        this._api.getAuthors()
            .subscribe(
                authors => {this.authors = authors },
                error =>  this.errorMessage = <any>error
            );
    }
}
