import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/services/request.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form_register_user!: FormGroup;
  form_register_admin!: FormGroup;
  view_tab = 'user';
  register = '';


  constructor(
    private fb: FormBuilder,
    private requestService: RequestService,
    private router : Router,
    private utilService: UtilsService
    ) {

   }

  ngOnInit(): void {
    this.register = localStorage.getItem('view') as string
    if(this.register){
      this.view_tab = this.register
    }

    this.createFormUser();
    this.createFormAdmin();
  }

  createFormUser(){
    this.form_register_user = this.fb.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]],
      cedula:['', [Validators.required]],
      lastnames:['', [Validators.required]],
      names:['', [Validators.required]],
      municipio:['', [Validators.required]],
      localidad:['', [Validators.required]],
      direccion:['', [Validators.required]],
      phone:['', [Validators.required]],
      phone_fijo:['', [Validators.required]],
    })
  }

  createFormAdmin(){
    this.form_register_admin = this.fb.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]],
      cedula:['', [Validators.required]],
      lastnames:['', [Validators.required]],
      names:['', [Validators.required]],
    })
  }

  registerUserAdmin(){
    if(this.form_register_admin.valid){
      this.utilService.start();
      const data = this.form_register_admin.value;
      this.requestService.post('admins', data).subscribe(
        (res) => {
        this.utilService.stop()
        window.alert('Usuario Creado');
        this.router.navigate([''])
      },
      ((error) => {
        this.utilService.stop();
        window.alert(error.message);
        console.log(error);
      })
      )
    }

  }



  registerUser(){

    if(this.form_register_user.valid){
      this.utilService.start();
      const data = this.form_register_user.value;
      data.virus = 'No aplica';
      data.atendido = 'No';
      data.síntomas = 'No';
      this.requestService.post('users', data).subscribe(
        (res) => {
        this.utilService.stop();
        window.alert('Usuario Creado');
        this.router.navigate([''])
      },
      ((error) => {
        this.utilService.stop();
        window.alert(error.message);
        console.log(error);
      })
      )
    }else{
      window.alert('Todos los campos son obligatorios')
    }
  }

}
