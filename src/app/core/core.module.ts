import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { NotFoundComponent, HeaderComponent, FooterComponent } from './components';
import { RouterModule } from '@angular/router';
import { ApiService } from './services';

@NgModule({
  imports: [RouterModule, HttpClientModule],
  exports: [NotFoundComponent, HeaderComponent, FooterComponent],
  declarations: [NotFoundComponent, HeaderComponent, FooterComponent],
  providers: [ApiService]
})
export class CoreModule {}
