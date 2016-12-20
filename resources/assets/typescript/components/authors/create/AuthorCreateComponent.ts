import {Component} from '@angular/core';
import {Api} from "../../../services/api";
import {AuthorFormComponent} from '../form/AuthorFormComponent';

@Component({
    selector: 'author-create',
    //templateUrl: './components/authors/create/index.html',
    template: require('./index.html'),
    directives: [AuthorFormComponent]
})

export class AuthorCreateComponent
{
    author: Object = {
        name: '',
    };
}
