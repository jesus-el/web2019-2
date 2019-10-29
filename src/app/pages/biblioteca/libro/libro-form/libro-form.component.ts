import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.scss']
})
export class LibroFormComponent implements OnInit {
  public libroForm: FormGroup;

  constructor(protected fb:FormBuilder) { }

  ngOnInit() {
 this.CreateForm();
  }
  CreateForm(){
    this.libroForm= this.fb.group({
      codigo :" ",
      nombre1 :" ",
      nombre2 :" ",
      Catidad_de_Paginas :" ",
      idpre:" "

    });
  }

}
