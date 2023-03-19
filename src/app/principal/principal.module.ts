import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [
    NavComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
   
  ], exports:[
    NavComponent,
    SectionComponent
      ]
})
export class PrincipalModule { }
