import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-form',
  templateUrl: './tipo-form.component.html',
  styleUrls: ['./tipo-form.component.scss']
})
export class TipoFormComponent implements OnInit {
  public titulo = "Formulario de Tipos";
  public codigo: String;
  public nombre: String;
  public descripcion: String;
  constructor() { }

  ngOnInit() {
  }
  SaveForm (){
    
  }
}
