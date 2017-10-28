import { Component, OnInit } from '@angular/core';
import { BindChildComponent } from '../bind-child/bind-child.component';

@Component({
  selector: 'app-bind-parent',
  templateUrl: './bind-parent.component.html',
  styleUrls: ['./bind-parent.component.css']
})
export class BindParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
