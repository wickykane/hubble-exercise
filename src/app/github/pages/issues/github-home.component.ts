import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/core/services';
import { TableService } from 'src/app/shared/services';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IssueDetailComponent } from '../issues-detail/issue-detail.component';

@Component({
  selector: 'app-github-home',
  templateUrl: './github-home.component.html',
  styleUrls: ['./github-home.component.scss'],
  providers: [TableService]
})
export class GithubHomeComponent implements OnInit {
  public searchForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private githubService: GithubService,
    private modalService: NgbModal,
    public tableService: TableService,
  ) {
    this.searchForm = fb.group({
      state: ['open']
    });
    this.tableService.init({
      context: this,
      fnName: 'getListGithubIssues'
    });
  }

  public _data = {};
  public selectedIndex = 0;

  ngOnInit() {
    this._data['state'] = [
      { value: 'open', name: 'Open' },
      { value: 'closed', name: 'Closed' },
      { value: 'all', name: 'All' }
    ];

    this.getListGithubIssues();
  }

  onStateChange() {
    this.getListGithubIssues();
  }

  getListGithubIssues() {
    this._data['loading'] = true;
    const params = this.searchForm.value;

    this.githubService.getListIssue(params).pipe(finalize(() => {
      this._data['loading'] = false;
    })).subscribe(res => {
      this._data['list_item'] = res;
    });
  }

  openDetailIssue(item) {
    const modelRef = this.modalService.open(IssueDetailComponent, { size: 'lg' });
    modelRef.result.then(res => {

    }, dismiss => { });
    modelRef.componentInstance.item = item;
  }

  goToDetail(index) {
    const id = this._data['list_item'][index]['id'];
    if (id) {
      this.router.navigate(['github', 'detail', id]);
    }
  }
}
