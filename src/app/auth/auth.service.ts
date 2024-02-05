import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm } from '../types/Auth';
import { RegisterForm } from '../types/Register';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated :boolean = false;
  isLoading:boolean = false;

  constructor(private router: Router) { }

  login(form: LoginForm){
    if(this.isLoading)
    return;
    this.isLoading = true;
    

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email,form.password)
      .then((userCredential) => {
        // Signed in 
       // const user = userCredential.user;
      this.isAuthenticated = true;
      console.log(userCredential);
      this.router.navigate(['']);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        this.isAuthenticated = true;
      })
      .finally(()=>(this.isLoading = false));
    
    
       // console.log(this.form);

  }
  passwordMatched = true;
  register(form: RegisterForm){
    if(this.isLoading)
    return;
    this.isLoading = true;
//     if(form.password !== form.confirm){
//       this.passwordMatched = false;

// return;
//     }
    const auth = getAuth();
createUserWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    // Signed up 
   // const user = userCredential.user;
   //console.log(userCredential);
   this.isAuthenticated = true;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    this.isAuthenticated = false;
    // ..
  })
  .finally(()=>(this.isLoading = false));;
  //  console.log(this.registerFrom);

  }
  logout(){

    const auth = getAuth();

    signOut(auth).then(() => {
  // Sign-out successful.
  this.router.navigate(['login']);

  this.isAuthenticated = false;
   }).catch((error) => {
  // An error happened.
   });

  }
}
