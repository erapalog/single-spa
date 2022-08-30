import { Component,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mf-usuario',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  title = 'demo';
}
