import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { EditorialComponent } from './editorial/editorial.component';
import { AutoresComponent } from './autores/autores.component';
import { TipoComponent } from './tipo/tipo.component';
import { AreasComponent } from './areas/areas.component';
import { LibroComponent } from './libro/libro.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { AreasFormComponent } from './areas/areas-form/areas-form.component';
import { AreasTableComponent } from './areas/areas-table/areas-table.component';
import { AutoresTableComponent } from './autores/autores-table/autores-table.component';
import { AutoresFormComponent } from './autores/autores-form/autores-form.component';


@NgModule({
  declarations: [EditorialComponent, AutoresComponent, TipoComponent, AreasComponent, LibroComponent, ExistenciaComponent, AreasFormComponent, AreasTableComponent, AutoresTableComponent, AutoresFormComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }
