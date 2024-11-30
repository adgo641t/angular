import { Injectable } from '@angular/core';
import { Zapatillas } from '../Models/zapatillas';

@Injectable({
  providedIn: 'root'
})
export class ZapatillaServiceService {
  public zapatillas : Array<Zapatillas>
  constructor() {
    this.zapatillas = [
      new Zapatillas('Reebok','blue','reebok',50,true),
      new Zapatillas('Adidas','Black','Zoom',90,true),
      new Zapatillas('Nike','blue','airmax',20,true),
      new Zapatillas('Pepe','orange','SB',20,false)
    ]; }

    getZapatillas(){
      return this.zapatillas;
    }
}
