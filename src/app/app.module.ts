import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistrarBeneficioComponent } from './pages/registrar-beneficio/registrar-beneficio.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { RegistrarEmpresaComponent } from './pages/registrar-empresa/registrar-empresa.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MsesionComponent } from './componentes/msesion/msesion.component';

import { JwtModule } from "@auth0/angular-jwt";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BeneficiosComponent,
    CabeceraComponent,
    MenuComponent,
    RegistrarBeneficioComponent,
    EmpresasComponent,
    RegistrarEmpresaComponent,
    FooterComponent,
    MsesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {}
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
