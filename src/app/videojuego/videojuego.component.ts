import { Component } from '@angular/core';

@Component({
  selector: 'videojuego',
  imports: [],
  templateUrl: './videojuego.component.html',
  styleUrl: './videojuego.component.css'
})
export class VideojuegoComponent {

  public titulo: string;
  public listado: string;

  constructor(){
    this.titulo= "videojuego";
    this.listado = "1"
  }

  cambiarTitulo(){
    this.titulo = "GTA"
  }
}
