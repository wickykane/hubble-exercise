import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

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
}
