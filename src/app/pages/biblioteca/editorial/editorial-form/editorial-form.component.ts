import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorial-form',
  templateUrl: './editorial-form.component.html',
  styleUrls: ['./editorial-form.component.scss']
})
export class EditorialFormComponent implements OnInit {
  public titulo = "formulario Editorial";
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
