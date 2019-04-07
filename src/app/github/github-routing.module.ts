import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GithubComponent } from './github.component';
import { GithubHomeComponent } from './pages';

const routes: Routes = [
    {
        path: '', component: GithubComponent, children: [
            { path: '', component: GithubHomeComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GithubRoutingModule { }
