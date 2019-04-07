import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from 'src/app/core/services';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {
  @Input() public item;
  constructor(private githubService: GithubService, public activeModal: NgbActiveModal) { }
  public _data = {};

  ngOnInit() {
    this.getDetailIssue();
  }

  getDetailIssue() {
    this._data['loading'] = true;
    forkJoin(
      this.githubService.getDetailIssue(this.item['number']),
      this.githubService.getDetailIssueComment(this.item['number']),
      ).pipe(finalize( () => {
        this._data['loading'] = false;
      })).subscribe(results => {
        this._data['issue'] = results[0];
        this._data['comments'] = [results[0],  ...results[1]];
      });
  }

}
