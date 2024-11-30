import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public identificado: boolean;

  constructor(){
    this.identificado= false

  }
  setIfentificado(){
    this.identificado=true
  }
}
