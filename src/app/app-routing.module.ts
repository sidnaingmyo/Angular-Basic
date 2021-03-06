import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {UsersComponent} from './users/users.component';
import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserComponent} from './users/user/user.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'servers',component:ServersComponent,children:[
      {path:':id',component: ServerComponent},
      {path : ':id/edit' , component: EditServerComponent}
    ]},
  {path:'users',component:UsersComponent , children:[
      {path : ':id/:name', component: UserComponent}
    ]},
  // {path:'users/:id/:name', component: UsersComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes, {anchorScrolling:'enabled'})
  ],
  exports:[RouterModule]

})

export class AppRoutingModule {}
