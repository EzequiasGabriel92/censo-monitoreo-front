import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/core/services/request.service';
import { UtilsService } from 'src/app/core/services/utils/utils.service';

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
    private requestService: RequestService,
    private utilsService: UtilsService
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
      this.utilsService.start();
      const data = this.form_register.value;
      this.requestService.post('notifications', data).subscribe(
        (res => {
          this.utilsService.stop();
          window.alert('Notificacion creada');
          this.form_register.reset();
          this.getAllNotification();
        }),
        (error => {
          this.utilsService.stop();
          window.alert(error.message);
          console.log(error);

        })
      );

    }else{
      window.alert('Los campos son obligatorios')
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
