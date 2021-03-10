import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListarDeudasComponent } from './listar-deudas/listar-deudas.component';

const routes: Routes = [{path:'login',component:LoginComponent},{path:'listarDeudas',component:ListarDeudasComponent},{path:'',redirectTo:'login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
