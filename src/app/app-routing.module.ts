import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserregComponent } from './pages/userreg/userreg.component';
import { UsertableComponent } from './pages/usertable/usertable.component';
import { UserviewComponent } from './pages/userview/userview.component';

const routes: Routes = [
  {
    path : "",
    component : UserregComponent
  },
  {
    path : "usersdetails",
    component : UsertableComponent
  },
  {
    path : "userdetail",
    component : UserviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
