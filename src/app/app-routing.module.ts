import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyGridComponent} from './my-grid/my-grid.component';

const routes: Routes = [
  {
    path : 'grid', component: MyGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes//, { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
