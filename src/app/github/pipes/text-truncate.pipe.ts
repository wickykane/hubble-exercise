import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTruncate'
})
export class TextTruncatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return this.truncateText(value, args);
  }

  truncateText(text, limit = 100) {
    return (
      text &&
      (text.length - 3 >= limit ? text.substring(0, limit) + '...' : text)
    );
  }
}
