import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existencia-form',
  templateUrl: './existencia-form.component.html',
  styleUrls: ['./existencia-form.component.scss']
})
export class ExistenciaFormComponent implements OnInit {
  public titulo = "Formulario de Existencia";
  public codigo: String;
  public nombre: String;
  public descripcion: String;
  constructor() { }

  ngOnInit() {
  }
    
  SaveForm (){
    
  }
}
