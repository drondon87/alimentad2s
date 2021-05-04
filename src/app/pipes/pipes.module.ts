import { NgModule } from '@angular/core';
import { MedidasPipe } from './medidas.pipe';



@NgModule({
  declarations: [MedidasPipe],
  exports: [
    MedidasPipe
  ]
})
export class PipesModule { }