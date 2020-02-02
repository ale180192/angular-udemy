import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() mensaje;
  @Output() clickPostEmmiter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clickPost(mensaje) {
    console.log('click on post', mensaje);
    this.clickPostEmmiter.emit(mensaje.id);
  }

}
