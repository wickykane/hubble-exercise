import { Injectable } from '@angular/core';

@Injectable()
export class TableService {
  constructor() {}

  private itemPerPageOptions = [15, 30, 50, 100];
  private maxSize = 5;

  public sortParams = {};

  private paginationConfig: any = {
    context: null,
    fnName: 'getList',
    length: 'limit',
    page: 'page',
    offset: 'offset',
    order: 'orderBy',
    sort: 'sort',
    total_page: 'total_page',
    total_record: 'total'
  };

  private pagination = {
    page: 1,
    length: 15
  };

  init(config?) {
    if (config) {
      this.paginationConfig = { ...this.paginationConfig, ...config };
    }
  }

  invokeGetList() {
    this.paginationConfig.context[this.paginationConfig.fnName]();
  }

  getParams() {
    const params = {};
    // params[this.paginationConfig.page] = this.pagination['page'] || 1;
    params[this.paginationConfig.length] = this.pagination['length'];
    params[this.paginationConfig.offset] =
    (this.pagination['page'] - 1) * this.pagination['length'];

    /* check sort */
    if (this.sortParams['order']) {
      params[this.paginationConfig.order] = this.sortParams['order'];
    }

    if (this.sortParams[this.paginationConfig.sort]) {
      params[this.paginationConfig.sort] =
        this.sortParams[this.paginationConfig.sort] === 1 ? 'asc' : 'desc';
    }

    return params;
  }

  sortAction(data) {
    this.invokeGetList();
  }

  changeLength() {
    this.pagination['page'] = 1;
    this.invokeGetList();
  }

  matchPagingOption(options) {
    try {
      this.pagination['total_page'] = Math.round(
        options[this.paginationConfig.total_record] /
          options[this.paginationConfig.length]
      );
      this.pagination['total_record'] =
        options[this.paginationConfig.total_record];
      this.pagination['length'] = options[this.paginationConfig.length];
    } catch (e) {
      console.log('pagination', e);
    }
  }

  changePage(index) {
    this.pagination['page'] = index;
    this.invokeGetList();
  }
}
