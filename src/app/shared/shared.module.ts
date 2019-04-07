import { NgModule } from '@angular/core';
import { TableService } from './services';
import { SortColumnDirective, cdArrowTable } from './directives';
import { LoadingComponent } from './components';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [SortColumnDirective, cdArrowTable, LoadingComponent],
  declarations: [SortColumnDirective, cdArrowTable, LoadingComponent],
  providers: [TableService]
})
export class SharedModule {}
