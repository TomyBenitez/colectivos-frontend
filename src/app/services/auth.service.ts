import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Auth, UserCredential, signInWithEmailAndPassword } from "@angular/fire/auth";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
@Injectable()
export class AuthService{
    constructor(@Inject(Auth) private auth:Auth, private _http:HttpClient){}

    iniciarSesion(correo: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(this.auth, correo, password);
    }

    createUser(usuario:any){
        return this._http.post(`${environment.server_url}:${environment.server_port}/auth/user`,{... usuario});
    }
}