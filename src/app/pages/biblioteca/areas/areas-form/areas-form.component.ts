import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas-form',
  templateUrl: './areas-form.component.html',
  styleUrls: ['./areas-form.component.scss']
})
export class AreasFormComponent implements OnInit {
  public titulo = "Formulario de Areas";
  public codigo: String;
  public nombre: String;
  public descripcion: String;
  constructor() { }

  ngOnInit() {
  }
  SaveForm (){
    
  }
}
