import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { configuracion } from './Models/configuracion';
import { CalculadoraPipe } from './pipes/calculadora.pipe';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    CommonModule,
    FormsModule,
    CalculadoraPipe
    
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aprendiendo_angular';
  public descrption: string ="Hola";
  public mostrar_vid: boolean = true;
  public config;


  constructor(){
    this.config = configuracion.fondo;
    this.descrption = configuracion.despricpcion;
    this.title = configuracion.titulo;
  }
  ocultarvid(){
    this.mostrar_vid = false;
  }
}
