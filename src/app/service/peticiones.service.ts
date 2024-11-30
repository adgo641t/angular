import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  public url: string;
  
  constructor(
    public http: HttpClient
  ) {
    this.url = "https://reqres.in/"
   }

   getUser(): Observable<any>{
    return this.http.get(this.url+'api/users/1');
   }


}
