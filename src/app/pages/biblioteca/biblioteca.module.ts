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
import { EditorialFormComponent } from './editorial/editorial-form/editorial-form.component';
import { EditorialTableComponent } from './editorial/editorial-table/editorial-table.component';
import { ExistenciaTableComponent } from './existencia/existencia-table/existencia-table.component';

import { ExistenciaFormComponent } from './existencia/existencia-form/existencia-form.component';
import { LibroTableComponent } from './libro/libro-table/libro-table.component';
import { LibroFormComponent } from './libro/libro-form/libro-form.component';
import { TipoTableComponent } from './tipo/tipo-table/tipo-table.component';
import { TipoFormComponent } from './tipo/tipo-form/tipo-form.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms"

@NgModule({
  declarations: [EditorialComponent, AutoresComponent, TipoComponent, AreasComponent, LibroComponent, ExistenciaComponent, AreasFormComponent, AreasTableComponent, AutoresTableComponent, AutoresFormComponent, EditorialFormComponent, EditorialTableComponent, ExistenciaTableComponent,  ExistenciaFormComponent, LibroTableComponent, LibroFormComponent, TipoTableComponent, TipoFormComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ]
})
export class BibliotecaModule { }
