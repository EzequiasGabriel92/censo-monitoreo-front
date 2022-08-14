import { Injectable } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  @BlockUI() blockUI!: NgBlockUI;

  constructor() { }
  start(){
    this.blockUI.start();
  }
  stop(){
    this.blockUI.stop()
  }
}
