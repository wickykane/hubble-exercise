import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(public httpClient: HttpClient) {}

  private headerOption(params?) {
    const httpOptions = {
      // headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.jwtService.getToken() }),
    };
    if (params) {
      httpOptions['params'] = params;
    }
    return httpOptions;
  }

  private _serverError(err) {
    if (err.error instanceof ErrorEvent) {
      return throwError(JSON.parse(err._body));
    }
    return throwError(err.error);
  }

  get(path, params?): Observable<any> {
    return this.httpClient
      .get(`${environment.api_url}${path}`, this.headerOption(params))
      .pipe(catchError(this._serverError));
  }

  post(path, params: object = {}): Observable<any> {
    return this.httpClient
      .post(
        `${environment.api_url}${path}`,
        JSON.stringify(params),
        this.headerOption()
      )
      .pipe(catchError(this._serverError));
  }

  put(path, params: object = {}): Observable<any> {
    return this.httpClient
      .put(
        `${environment.api_url}${path}`,
        JSON.stringify(params),
        this.headerOption()
      )
      .pipe(catchError(this._serverError));
  }

  delete(path): Observable<any> {
    return this.httpClient
      .delete(`${environment.api_url}${path}`, this.headerOption())
      .pipe(catchError(this._serverError));
  }

  madeFormData(data) {
    const formData: FormData = new FormData();
    //  tslint:disable-next-line:forin
    for (const i in data) {
      formData.append(i, data[i]);
    }
    return formData;
  }
}
