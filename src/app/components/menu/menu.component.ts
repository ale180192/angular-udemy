import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rutas = [
    {
      path: '/home',
      name: 'home'
    },
    {
      path: '/about',
      name: 'about'
    },
    {
      path: '/contact',
      name: 'contact'
    },
    {
      path: '/posts',
      name: 'posts'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
