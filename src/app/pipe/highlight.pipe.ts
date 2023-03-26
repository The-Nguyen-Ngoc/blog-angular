import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, searchTerm: string): string {
    if (!searchTerm.trim()) {
      return value;
    }

    const regex = new RegExp(searchTerm, 'gi');
    console.log(regex)
    return value.replace(regex, `<mark>${searchTerm}</mark>`);
  }
}