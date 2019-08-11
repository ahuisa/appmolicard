import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';
import { RegistrarBeneficioComponent } from './pages/registrar-beneficio/registrar-beneficio.component';
import { RegistrarEmpresaComponent } from './pages/registrar-empresa/registrar-empresa.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';

const routes: Routes = [
	{
	    path : '',
	    pathMatch : 'full',
	    redirectTo : 'login'
  	},
  	{
    	path : 'login',
    	component: LoginComponent
  	},
    {
      path : 'beneficios',
      component: BeneficiosComponent
    },
    {
      path : 'registrar-beneficio',
      component: RegistrarBeneficioComponent
    },
    {
      path : 'empresas',
      component: EmpresasComponent
    },
    {
      path : 'registrar-empresa',
      component: RegistrarEmpresaComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
