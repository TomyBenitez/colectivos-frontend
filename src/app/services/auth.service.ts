import { Inject, Injectable } from "@angular/core";
import { Auth, UserCredential, signInWithEmailAndPassword } from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})
@Injectable()
export class AuthService{
    constructor(@Inject(Auth) private auth:Auth){}

    iniciarSesion(correo: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(this.auth, correo, password);
    }
}