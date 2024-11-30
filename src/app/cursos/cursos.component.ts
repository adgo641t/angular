import { Component, OnInit, DoCheck} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-cursos',
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})

export class CursosComponent implements OnInit,DoCheck{
  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}
  ngOnInit(){
    this._route.params.subscribe((params: Params)=>{
      console.log(params);
    })
  }

  ngDoCheck(): void {
  }

  redirigir(){
    this._router.navigate(['/zapatillas'])
  }
}
