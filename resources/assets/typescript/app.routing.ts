import { Routes, RouterModule }     from '@angular/router';
import { PageNotFoundComponent }    from "./components/page-not-found/page-not-found.component";
import { FirstComponent }           from "./components/first/first.component";
import { SecondComponent }          from "./components/second/second.component";

import { AuthorListComponent }      from "./components/authors/list/AuthorListComponent";
import { AuthorEditComponent }      from "./components/authors/edit/AuthorEditComponent";
import { AuthorCreateComponent }    from "./components/authors/create/AuthorCreateComponent";
import { AuthorDetailComponent }    from "./components/authors/detail/AuthorDetailComponent";

export const routes: Routes = [
    {
        path: '',
        component: FirstComponent
    },
    {
        path: 'edit',
        component: SecondComponent
    },
    {
        path:'authors',
        //name: 'Authors',
        component: AuthorListComponent
    },
    {
        path:'authors/create',
        //name: 'AuthorCreate',
        component: AuthorCreateComponent
    },
    {   
        path:'authors/:id',
        //name: 'AuthorDetail',
        component: AuthorDetailComponent
    },
    {
        path:'authors/edit/:id',
        //name: 'AuthorEdit', 
        component: AuthorEditComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
