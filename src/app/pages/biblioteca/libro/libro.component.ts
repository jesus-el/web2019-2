import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
  public libroFrom: FormGroup;
  constructor(protected fb:FormBuilder) { }

  ngOnInit() {
  }
  CreateForm(){
    this.libroFrom= this.fb.group({
      codigo :' ',
      nombre1 :' ',
      nombre2 :' ',
      Catidad_de_Paginas :' ',
      idpre:' '
      });
  }
}
