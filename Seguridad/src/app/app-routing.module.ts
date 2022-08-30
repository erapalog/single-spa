import { APP_BASE_HREF ,LocationStrategy,HashLocationStrategy} from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule ,NoPreloading,} from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import {AnotherComponent} from './another/another.component'
const routes: Routes = [
  /*{path:'mf-usuario',component:AnotherComponent,
  children:[
    {path:'roles',component:RolesComponent}
  ]
},
  { path: '**', component: EmptyRouteComponent },*/

  {
    path: 'roles',
    loadChildren: () => import('./pages/groups/groups.module').then(m => m.GroupsModule),
  },
  {
    path: 'usuario/:idRol',
    loadChildren: () => import('./pages/rooms/rooms.module').then(m => m.RoomsModule),
  },
  { path: '**', component: EmptyRouteComponent,pathMatch: 'full' }
 
];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}]
})*/
export const AppRoutingModule = RouterModule.forRoot(routes);
//export class AppRoutingModule {}