import { Component, OnInit} from '@angular/core';
import { Zapatillas } from '../Models/zapatillas';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZapatillaServiceService } from '../service/zapatilla-service.service';
@Component({
  selector: 'app-zapatillas',
  imports: [CommonModule,FormsModule],
  templateUrl: './zapatillas.component.html',
  styleUrl: './zapatillas.component.css',
  providers: [ZapatillaServiceService]
})
export class ZapatillasComponent implements OnInit{
  public titulo: string = "zapatillas"
  public zapatillas: Array<Zapatillas>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor(
    private _zapatillaService: ZapatillaServiceService
  ){
    this.color = 'blue';
    this.mi_marca = "";
    this.marcas = new Array;
    this.zapatillas = _zapatillaService.getZapatillas();
  }
  ngOnInit(){
    console.log(this.zapatillas);
    this.marca();

  }

  marca(){
    this.zapatillas.forEach((zapatilla,index)=> {
      if(this.marcas.indexOf(zapatilla.marca) < 0)
        {
         this.marcas.push(zapatilla.marca);
        }
    })
    console.log(this.marcas)
  }
  getMarca(){
    alert(this.mi_marca);
  }

  AnadirMarca(){

        this.marcas.push(this.mi_marca);    
  }

  borrarMarca(){
  }
}
