import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import {Usuario} from '../model/usuario';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  private readonly API_URL=environment.webAPI;
  public ValidarUsuario(usuario:Usuario):Observable<Usuario>
  {
    return this.http.post<Usuario>(this.API_URL+"/Seguridad/ValidarUsuario",usuario).pipe(tap((data)=>{
      console.log(JSON.stringify(data));
    }),
     catchError(err=>{throw console.log("Error del servidor detalles"+JSON.stringify(err))})
    )
  }
}
