import {Component, OnInit} from '@angular/core';
//import {Params, ActivatedRoute, ROUTER_DIRECTIVES, Router} from "@angular/router";
import {Params, ActivatedRoute, Router} from "@angular/router";
import {Api} from "../../../services/api";
import { Location }               from '@angular/common';

@Component({
    selector: 'author',
    //templateUrl: './components/authors/detail/index.html',
    template: require('./index.html'),
    //directives: [ROUTER_DIRECTIVES]
})

export class AuthorDetailComponent implements OnInit {
    private sub:any;
    //var author: any;
    private author: Object;
    //private author: any;
    /*
    constructor(private _api: Api, private _params: RouteParams)
    {
        this._api.getAuthor(_params.get("id")).then(
            (res: any) => {
                console.log(res.author);
                this.author = res.author;
            },
            (error) => {
                console.error(error);
            }
        )
    }
    */
    constructor(
        private _api: Api,
        private route: ActivatedRoute,
        //private _params: RouteParams
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


        /*
        this.route.params.forEach((params: Params) => {
          let id = +params['id'];
          this._api.getAuthor(id)
            .subscribe(
                author => {this.author = author; console.log(author); },
                error =>  this.errorMessage = <any>error
            );
        });
        /*
        this._api.getAuthor(_params.get("id")).then(
            (res: any) => {
                console.log(res.author);
                this.author = res.author;
            },
            (error) => {
                console.error(error);
            }
        )
        */
    }

    ngOnDestroy() {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    }
}
