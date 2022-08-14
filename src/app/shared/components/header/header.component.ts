import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() is_user = false;

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

}
