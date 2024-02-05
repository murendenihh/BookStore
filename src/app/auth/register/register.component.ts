import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/Register';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFrom: RegisterForm ={
    email: "",
    password: "",
    confirm: ""
  }
  passwordMatched:boolean = true;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  submit(){
   
  this.authService.register(this.registerFrom);
  }

  isLoading(){
    return this.authService.isLoading;
  }
  

}
