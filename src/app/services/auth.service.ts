import { Inject, Injectable } from "@angular/core";
import { Auth, signInWithEmailAndPassword } from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})
@Injectable()
export class AuthService{
    constructor(@Inject(Auth) private auth:Auth){}

    iniciarSesion(usuario:string,password:string){
        return
    }
}