import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form_register_user!: FormGroup;
  form_register_admin!: FormGroup;
  view_tab = 'user';


  constructor(
    private fb: FormBuilder,
    private requestService: RequestService,
    private router : Router
    ) {

   }

  ngOnInit(): void {
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
      const data = this.form_register_admin.value;
      this.requestService.post('admins', data).subscribe((res) => {
        window.alert('Usuario Creado');
        this.router.navigate([''])
      },
      ((error) => {
        console.log(error);
      })
      )
    }

  }



  registerUser(){

    if(this.form_register_user.valid){
      const data = this.form_register_user.value;
      data.virus = 'No aplica';
      data.atendido = 'No';
      data.síntomas = 'No';
      this.requestService.post('users', data).subscribe((res) => {
        window.alert('Usuario Creado');
        this.router.navigate([''])
      },
      ((error) => {
        console.log(error);
      })
      )
    }else{
      window.alert('Todos los campos son obligatorios')
    }
  }

}
