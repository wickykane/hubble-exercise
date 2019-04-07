import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubService {
  constructor(private API: ApiService) { }

  getListIssue(params) {
    const uri = 'repos/nnluukhtn/employment_bot/issues';
    return this.API.get(uri, params);
  }

  getDetailIssue(id) {
    const uri = 'repos/nnluukhtn/employment_bot/issues/' + id;
    return this.API.get(uri);
  }

  getDetailIssueComment(id) {
    const uri = 'repos/nnluukhtn/employment_bot/issues/' + id + '/comments';
    return this.API.get(uri);
  }
}
