import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'github' },
  {
    path: 'github',
    loadChildren: './github/github.module#GithubModule'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
