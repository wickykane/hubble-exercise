import { AppModule } from '../../../app.module';
import { CoreModule } from '../../../core/core.module';
import { GithubModule } from '../../github.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDetailComponent } from './issue-detail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('IssueDetailComponent', () => {
  let component: IssueDetailComponent;
  let fixture: ComponentFixture<IssueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GithubModule, CoreModule, AppModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
