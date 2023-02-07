import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  Login() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  readonly ISLOGGEDKEY = 'islogged';
  public urlUsuarioIntentaAcceder = '';

  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  login(username: string, password: string) {

    if (username === 'JN' && password === '123456')
    {
      localStorage.setItem(this.ISLOGGEDKEY, 'true');
      this.changeLoginStatusSubject.next(true);
      return true;
    }
     else if(username === 'prueba' && password === '123'){
        localStorage.setItem(this.ISLOGGEDKEY, 'true');
        this.changeLoginStatusSubject.next(true);
      return true;
    }

      else if(username === 'user' && password === '123456'){
      localStorage.setItem(this.ISLOGGEDKEY, 'true');
      this.changeLoginStatusSubject.next(true);
      return true;}
      else{
        return false;
      }
  }

logout() {
localStorage.removeItem(this.ISLOGGEDKEY);
this.changeLoginStatusSubject.next(false);
}

isLoggedIn(url: string) {
const isLogged = localStorage.getItem(this.ISLOGGEDKEY);
if (!isLogged) {
this.urlUsuarioIntentaAcceder = url;
return false;
}
return true;
}
}
