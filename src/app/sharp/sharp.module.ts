import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharpRoutingModule } from './sharp-routing.module';
import { RunComponent } from './run/run.component';
import { WalkComponent } from './walk/walk.component';


@NgModule({
  declarations: [
    RunComponent,
    WalkComponent
  ],
  imports: [
    CommonModule,
    SharpRoutingModule
  ]
})
export class SharpModule { }
