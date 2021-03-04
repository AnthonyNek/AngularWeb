import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Usuario} from '../model/usuario';
import {LoginService} from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService) { }
  public usuario:string='';
  public clave:string='';
  public mensaje:string='';
  public isError=false;

  ngOnInit(): void {
  }
     logIn(formLogin:NgForm)
   {
        if(formLogin.valid)
        {
          event?.preventDefault();
          let usu=new Usuario(this.usuario,this.clave,'');
          this.loginService.ValidarUsuario(usu).subscribe((res:Usuario)=>{
            sessionStorage.removeItem("token");
            sessionStorage.setItem("token",JSON.stringify(res.token));
           // this.router.navigate([""]);
            this.isError=false;
          },error=>{
             this.isError=true;
             this.mensaje="los datos ingresados son erroneos";
             console.log(error);
             setTimeout(()=>{
               this.isError=false;
             },4000);
          })
        }
        else{
          this.isError=true;
          this.mensaje="No ha ingresado sus credenciales";
          setTimeout(()=>{
            this.isError=false;
          },4000);
        }
   }
}
