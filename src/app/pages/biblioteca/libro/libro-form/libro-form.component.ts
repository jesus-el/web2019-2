import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.scss']
})
export class LibroFormComponent implements OnInit {
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
      idpre:''

    });
  }

}
