import { GithubModule } from '../../github.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubHomeComponent } from './github-home.component';
import { CoreModule } from 'src/app/core/core.module';
import { AppModule } from 'src/app/app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('GithubHomeComponent', () => {
  let component: GithubHomeComponent;
  let fixture: ComponentFixture<GithubHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GithubModule, CoreModule, AppModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
