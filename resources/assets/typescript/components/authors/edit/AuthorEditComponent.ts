import {Component, OnInit} from '@angular/core';
import {Api} from "../../../services/api";
import {Params, ActivatedRoute, Router} from "@angular/router";
import {AuthorFormComponent} from '../form/AuthorFormComponent';
import { Location }               from '@angular/common';

@Component({
    selector: 'author',
    //templateUrl: './components/authors/edit/index.html',
    template: require('./index.html'),
    directives: [AuthorFormComponent]
})

export class AuthorEditComponent
{
    author: Object;

    constructor(
        private _api: Api,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];

            this._api.getAuthor(id)
                .subscribe(
                    author => {this.author = author; console.log(author); },
                    //error =>  this.errorMessage = <any>error
                    error =>  "Error"
                );
        });
    }

}
