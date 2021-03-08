import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(private fbauth: AngularFireAuth, private ngZone: NgZone, private router: Router) { 
    this.fbauth.authState.subscribe(user=>{
      if(user){
        //console.log('user', user)
        this.userData = user;
        localStorage.setItem('user', this.userData.email)
      }
    })
  }

  signIn(email, password){
    return this.fbauth.signInWithEmailAndPassword(email, password)
    .then((result)=>{
      this.router.navigate(['/'])
    }).catch((error)=>{
      window.alert(error.message)
    })
  }

  signUp(email, password){
    return this.fbauth.createUserWithEmailAndPassword(email, password)
    .then((result)=>{
      this.router.navigate(['/'])
    }).catch((error)=>{
      window.alert(error.message)
    })
  }

  logOut(){
    return this.fbauth.signOut().then(()=>{
      localStorage.removeItem('user')
      this.router.navigate(['/login'])
    })
  }

  isloggedIn(){
    const user = localStorage.getItem('user');
    return user? true: false;
  }

  getUser(){
    const user = localStorage.getItem('user')
    return user? user: null;
  }
}
