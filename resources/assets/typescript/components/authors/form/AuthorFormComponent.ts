import {Component, Input} from '@angular/core';
//import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Router} from '@angular/router';
import {Api} from "../../../services/api";
import {IAuthor} from "../../../interfaces/IAuthor";

@Component({
    selector: 'authors-form',
    //templateUrl: './components/authors/form/authors-form.html',
    template: require('./authors-form.html'),
    //directives: [ROUTER_DIRECTIVES]
})

export class AuthorFormComponent {
    @Input('author') author: IAuthor;
    //author = new IAuthor();
    @Input('isUpdate') isUpdate: boolean = false;
    @Input('action') action: string;
    errors: Array<Object> = [];

    constructor(private _router: Router, private _api: Api){

    }

    processAuthor(author): void {
        !this.isUpdate ? this.save(author) : this.update(author);
    }

    save(author)
    {
        let author_string = this._authorString(author);
        console.log(author);
        this._api.createAuthor(author_string).then(
            (res) => {
                this._router.navigate(['/authors']);
            },
            (error) => {
                if(error.status === 422) //código de respuesta de laravel cuando falla la validación
                {
                    this.errors = [];
                    let errors = error.json();
                    for(var key in errors) {
                         this.errors.push(errors[key]);
                    }
                }
            }
        );
    }

    update(author)
    {
        let author_string = this._authorString(author);

        this._api.updateAuthor(author_string, author.id).then(
            (res) => {
                this._router.navigate(['/authors']);
            },
            (error) => {
                if(error.status === 422)//código de respuesta de laravel cuando falla la validación
                {
                    this.errors = [];
                    let errors = error.json();
                    for(var key in errors) {
                        this.errors.push(errors[key]);
                    }
                }
            }
        );
    }

    private _authorString(author): string{
        return "&name="+author.name;
    }
}
