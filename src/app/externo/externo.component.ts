import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeticionesService } from '../service/peticiones.service';
import { Observable } from 'rxjs';
import { CalculadoraPipe } from '../pipes/calculadora.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-externo',
  imports: [CommonModule,CalculadoraPipe,FormsModule],
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.css',
  providers: []
})
export class ExternoComponent implements OnInit{
  public user: any;
  public user_id: Number;
  public fecha: any;
  public new_user: any;
  public usuariosSaved;


  constructor(private _peticionesService: PeticionesService){
    this.user_id = 2
    this.new_user = {
      'name':'',
      'job': ''
    }
  }

  ngOnInit(){
    this.cargarUsuario();
    this.fecha = new Date();
  }

  cargarUsuario(){
    this._peticionesService.getUser().subscribe(
      result => { 
        this.user = result.data;
      }, error => {
        console.log(<any>error)
      }
    );
  }

  onSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        this.usuariosSaved = response
        form.reset();
      }, error => {
        console.log(error)
      }
    )
  }
}



