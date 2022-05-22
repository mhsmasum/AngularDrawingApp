import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgDrawComponent } from './svg-draw/svg-draw.component';

const routes: Routes = [

  {path:'', component:SvgDrawComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
