import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestService } from 'src/app/core/services/request.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  item_virus =[
    'Covid - 19',
    'Covid con variación',
    'Viruela de mono',
    'Otro'
  ];

  items_atendido = ['Si', 'No']

  items_sintomas = [
    'fiebre',
    'erupciones en la piel',
    'tos',
    'dolores musculares',
    'dolor de cabeza, vómito',
    'Otros'
  ]

  form_register!: FormGroup;
  user: any;
  items_notification:any[] = [];

  constructor(
    private fb: FormBuilder,
    private requestService: RequestService,
    private utilsService : UtilsService
    ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')as any);
    console.log(this.user);
    this.createForm();
    this.form_register.controls['id'].setValue(this.user.id);
    this.getAllNotification();
  }

  createForm(){

    this.form_register = this.fb.group({
      virus: [''],
      id:[''],
      atendido: [''],
      síntomas: ['']
    })

  }

  update(){
    if(this.form_register.valid){
      this.utilsService.start()
    const data = this.form_register.value;
    const url = `users/${this.user.id}`;
    this.requestService.put(url, data).subscribe(
      (res => {
        this.utilsService.stop()
        window.alert('Sintomas Actualizados')
      }),
      (error => {
        this.utilsService.stop()
        window.alert(error.message);
        console.log(error);

      })

    )
    }
  }

  getAllNotification(){
    this.utilsService.start()
    this.requestService.get('notifications').subscribe(
        ((res: any) => {
          this.utilsService.stop()
          this.items_notification = res;
        }),
        (error => {
          this.utilsService.stop()
          window.alert(error.message);
          console.log(error);

        })
      );
  }

}
