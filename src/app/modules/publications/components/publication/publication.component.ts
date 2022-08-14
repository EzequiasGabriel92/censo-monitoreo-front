import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  form_register!: FormGroup;
  items_notification:any[] = [];

  constructor(
    private fb: FormBuilder,
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    this.create_form();
    this.getAllNotification();
  }

  create_form(){
    this.form_register = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  create(){
    if(this.form_register.valid){
      const data = this.form_register.value;
      this.requestService.post('notifications', data).subscribe(
        (res => {
          window.alert('Notificacion creada');
          this.form_register.reset();
          this.getAllNotification();
        }),
        (error => {
          console.log(error);

        })
      );

    }else{
      window.alert('Los campos son obligatorios')
    }

  }

  getAllNotification(){
    this.requestService.get('notifications').subscribe(
        ((res: any) => {
          this.items_notification = res;
        }),
        (error => {
          console.log(error);

        })
      );
  }

}
