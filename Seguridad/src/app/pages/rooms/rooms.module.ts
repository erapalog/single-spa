import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoomsRoutingModule } from './rooms-routing.module';

import { RoomsComponent } from './rooms.component';
import { SearchPipe } from '../../Pipe/SearchPipe';

@NgModule({
  imports: [RoomsRoutingModule,CommonModule,FormsModule],
  declarations: [RoomsComponent,SearchPipe],
})
export class RoomsModule {}
 