import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunComponent } from './run/run.component';
import { WalkComponent } from './walk/walk.component';

const routes: Routes = [
{
  path:'run',
  component:RunComponent,
},
{
  path:'walk',
  component:WalkComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharpRoutingModule { }
