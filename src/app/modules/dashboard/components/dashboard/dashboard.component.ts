import { Component, DebugElement, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items_enfermedades = [
    {enfermedad: 'Covid - 19', cant : 0 },
    {enfermedad: 'Covid con variación', cant : 0 },
    {enfermedad: 'Viruela de mono', cant : 0 },
    {enfermedad: 'Otra', cant : 0 },

  ];

  items_sintomas = [
    {sintoma: 'fiebre', cant: 0},
    {sintoma: 'erupciones en la piel', cant: 0},
    {sintoma: 'tos', cant: 0},
    {sintoma: 'dolores musculares', cant: 0},
    {sintoma: 'dolor de cabeza, vómito', cant: 0},
    {sintoma: 'Otros', cant: 0},
  ]
  cant_users = 0;

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.requestService.get('users').subscribe(
      ((res:any) => {
        if(res){
          this.cant_users = res.length;
          res.forEach((element: any) => {
            if(element.virus !== '')
            this.cont_enfermedades(element.virus);

            if(element.síntomas)
            this.const_sintomas(element.síntomas)
          });
        }
      }),
    (error => {
      console.log(error);
      window.alert(error.message);
    })
    )
  }

  cont_enfermedades(virus: string){
    switch (virus) {
      case 'Covid - 19':
        this.items_enfermedades[0].cant++
        break;
      case 'Covid con variación':
        this.items_enfermedades[1].cant++
        break;
      case 'Viruela de mono':
        this.items_enfermedades[2].cant++
        break;
      default:
        this.items_enfermedades[3].cant++
        break;
    }
  }

  const_sintomas(data: any){
    let dataActual = JSON.parse(data) as any;
    dataActual.forEach((element: any) => {
      switch (element) {
        case 'fiebre':
          this.items_sintomas[0].cant++
          break;
        case 'erupciones en la piel':
          this.items_sintomas[1].cant++
          break;
        case 'tos':
          this.items_sintomas[2].cant++
          break;
        case 'dolores musculares':
          this.items_sintomas[3].cant++
          break;
        case 'dolor de cabeza, vómito':
          this.items_sintomas[4].cant++
          break;
        default:
          this.items_sintomas[5].cant++
          break;
      }
    });


  }

}
