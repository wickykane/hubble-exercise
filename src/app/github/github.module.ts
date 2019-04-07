import { SharedModule } from '../shared/shared.module';
import { GithubRoutingModule } from './github-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GithubHomeComponent, IssueDetailComponent } from './pages';
import { GithubComponent } from './github.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TextTruncatePipe } from './pipes';
import { GithubService } from '../core/services';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GithubRoutingModule,
    HotkeyModule, SharedModule, NgbPaginationModule, NgbModalModule],
  declarations: [
    GithubComponent,
    GithubHomeComponent,
    IssueDetailComponent,
    TextTruncatePipe
  ],
  entryComponents: [IssueDetailComponent],
  providers: [GithubService]
})
export class GithubModule { }
