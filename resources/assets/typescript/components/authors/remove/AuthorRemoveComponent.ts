import {Component, Input} from '@angular/core';
import {Api} from "../../../services/api";
import {ROUTER_DIRECTIVES} from '@angular/router';

declare var jQuery:any;

@Component({
    selector: 'author-remove',
    //templateUrl: './components/authors/remove/index.html',
    template: require('./index.html')
    directives: [ROUTER_DIRECTIVES]
})

export class AuthorRemoveComponent
{
    @Input('author') author: Object;
    constructor(private _api: Api)
    {

    }

    remove(id)
    {
        this._api.deleteAuthor(id);
        jQuery("#remove-author").modal("hide");
        jQuery("#item-"+id).remove();
    }
}
