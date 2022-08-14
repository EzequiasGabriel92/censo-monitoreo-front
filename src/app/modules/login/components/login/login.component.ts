import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/services/request.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

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
    private router : Router,
    private utilsService: UtilsService
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

  register(view: string){
    localStorage.setItem('view', view);
    this.router.navigate(['register'])
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
    this.utilsService.start();
    this.requestService.get('admins').subscribe((res: any)=> {
      if(res){
        this.utilsService.stop();
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
      this.utilsService.stop();
      window.alert(error.message);
      console.log(error);
    })
     )
  }

  getAllUser(){
    this.utilsService.start()
    this.requestService.get('users').subscribe((res: any)=> {
      if(res){
        this.utilsService.start();
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
      this.utilsService.stop();
      console.log(error);
      window.alert(error.message);

    })
     )
  }

}
