import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
  public titulo = "formulario Autores";
  public nombre : String;
  public apellido : String;
  public fech_nc : String;
  public nacionalidad : String; 
  constructor() { }

  ngOnInit() {
  }

  saveForm() {
    alert(this.nombre)
  }
}
