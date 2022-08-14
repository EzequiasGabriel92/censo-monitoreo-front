import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private requestService: RequestService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  get f (){
    return this.formLogin
  }

  saveUser(){
    if(this.formLogin.valid){
      this.getAllUser();
    }

  }

  saveUserAdmin(){
    if(this.formLogin.valid){
      this.getAllUserAdmins();
    }
  }

  getAllUserAdmins(){
    this.requestService.get('admins').subscribe((res: any)=> {
      if(res){
        if(res.length == 0){
          window.alert('No existen usuarios registrados');
        }
        res.forEach((element: any) => {
          if(element.email == this.formLogin.controls['email'].value && element.password == this.formLogin.controls['password'].value ){
            localStorage.setItem('admins', JSON.stringify(element));
            this.router.navigate(['dashboard']);
          }else{
            window.alert('El email o el password es equivocado')
          }
        });
      }
    },
    (error => {
      window.alert(error.message);
      console.log(error);
    })
     )
  }

  getAllUser(){
    this.requestService.get('users').subscribe((res: any)=> {
      if(res){
        if(res.length == 0){
          window.alert('No existen usuarios registrados');
        }
        res.forEach((element: any) => {
          if(element.email == this.formLogin.controls['email'].value && element.password == this.formLogin.controls['password'].value ){
            localStorage.setItem('user', JSON.stringify(element));
            this.router.navigate(['user']);
          }else{
            window.alert('El email o el password es equivocado')
          }
        });
      }
    },
    (error => {
      console.log(error);
      window.alert(error.message);

    })
     )
  }

}
