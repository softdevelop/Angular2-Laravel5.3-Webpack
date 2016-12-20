import {Http, Headers, Response} from "@angular/http"
import {Injectable} from "@angular/core"
import {IAuthor} from "../interfaces/IAuthor"
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';

@Injectable()
export class Api
{
    /*
    apiUrl: string = "http://localhost:8000/api/authors/";
    */
    //apiUrl: string = "http://crudangular2.com/api/authors";
    //private apiUrl = 'http://sirfak.l53a2.com/api/authors';  // URL to web API
    private apiUrl = '/api/authors';  // URL to web API
    /*
    private headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
    });
    */
    headers: Headers = new Headers;
    authors$: Observable<IAuthor[]>;
    private _authorsObserver: Observer<IAuthor[]>;
    private _dataStore: {
        authors: IAuthor[]
    };

    constructor(private _http: Http)
    {
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('X-Requested-With', 'XMLHttpRequest');

        this.authors$ = new Observable(observer => this._authorsObserver = observer).share();
        this._dataStore = { authors: [] };
    }

    public getAuthors()
    {
        /*
        this._http.get(this.apiUrl).map(
            response => response.json()).subscribe(
                data => {
                    console.log(data.authors);
                    return data.authors;
                    //this._dataStore.authors = data.authors;
                    //return data.authors;
                    //this._authorsObserver.next(this._dataStore.authors);
                }, 
                error => console.log('Authors')
            );
        */

        return this._http.get(this.apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response) {
        let data = res.json();
        return data.authors || { };
    }

    public getAuthor(id)
    {
        return this._http.get(this.apiUrl + "/" + id)
                    .map(this.extractDetailData)
                    .catch(this.handleError);
                /*
                .subscribe(
                    res => {
                        console.log("res");
                        console.log(res);
                        let data = res.json();
                        return data.author || { };
                    },
                    error =>  this.errorMessage = <any>error
                );
                */
    }

    private extractDetailData(res: Response) {
        let data = res.json();
        return data.author || { };
    }


    public createAuthor(author)
    {
        return new Promise((resolve, reject) => {
            this._http.post(this.apiUrl, author, {
                headers: this.headers
            })
            .map((res: Response) => res.json())
            .subscribe(
                (res) => {
                    resolve(res);
                },
                (error) => {
                    reject(error);
                }
            );
        })
    }

    public updateAuthor(author, id)
    {
        return new Promise((resolve, reject) => {
            this._http.patch(this.apiUrl + "/" + id, author, {
                headers: this.headers
            })
            .map((res: Response) => res.json())
            .subscribe(
                (res) => {
                    resolve(res);
                },
                (error) => {
                    reject(error);
                }
            );
        })
    }

    public deleteAuthor(id)
    {
        this._http.delete(this.apiUrl +"/"+ id, {
            headers: this.headers
        }).subscribe(response => {
            this._dataStore.authors.forEach((t, i) => {
                if (t.id === id) { this._dataStore.authors.splice(i, 1); }
            });
            this._authorsObserver.next(this._dataStore.authors);
        }, error => console.log('Não foi possível deletar a author.'));
    }
}
