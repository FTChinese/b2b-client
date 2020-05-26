import { Pipe, PipeTransform } from '@angular/core';
import { Tier } from 'src/app/data/schema/enum';
import { tiers } from 'src/app/data/schema/localization';

@Pipe({
  name: 'edition'
})
export class EditionPipe implements PipeTransform {
  transform(value: Tier): string {
    return tiers[value];
  }
}
