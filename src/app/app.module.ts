import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';//1. Importar modulos
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { McnificosComponent } from './mcnificos/mcnificos.component';
import { SaludoComponent } from './saludo/saludo.component';//importar componentes 
//2. Crear tabla de rutas
const appRoutes:Routes=[
  {path:'mcnificos',component: McnificosComponent},
  {path:'saludo',component:SaludoComponent }
];
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot(appRoutes) ],//3. cargo tabla rutas
  declarations: [ AppComponent, HelloComponent, McnificosComponent, SaludoComponent ],
  bootstrap:    [ AppComponent ]
})
//4. En el html uso routlerLink="nombrecomponente"
//5. Uso la etiqueta <router-outlet> para indicar donde cambia
export class AppModule { }
