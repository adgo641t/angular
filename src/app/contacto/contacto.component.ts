import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../Models/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule,FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  public usuario: Usuario;

  constructor(){
    this.usuario = new Usuario('','','','');
  }

  onSubmit(){
    console.log(this.usuario)
  }
}
