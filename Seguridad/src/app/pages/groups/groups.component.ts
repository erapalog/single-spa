import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
//import { ExtraComponent } from "@walmart/mf-header";
import { Location } from '@angular/common';    

@Component({
  selector: 'chat-groups',
  templateUrl: './groups.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsComponent {
  constructor(private router: Router,  private location: Location) {}

  tryToReproduce113Issue(): void {
   // this.router.navigateByUrl('/rooms').then(() => this.router.navigateByUrl('/groups'));
   this.router.navigate(['/groups']);
  }
}
