import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AntropediaAdultoComponent } from "./antropedia-adulto.component";

const routes: Routes = [
    {path:'',component: AntropediaAdultoComponent}
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AntropediaAdultoRoutingModule { }