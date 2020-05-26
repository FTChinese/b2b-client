import { Pipe, PipeTransform } from '@angular/core';
import { InvitationStatus } from 'src/app/data/schema/enum';
import { invitationStatus } from 'src/app/data/schema/localization';

@Pipe({
  name: 'invitationStatus'
})
export class InvitationStatusPipe implements PipeTransform {

  transform(value: InvitationStatus): string {
    return invitationStatus[value];
  }

}
