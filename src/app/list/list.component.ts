import { Component, OnInit } from '@angular/core';
import { ListData } from '../list';
import { ListCodigo } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list = ListData;
  list2 = ListCodigo;

  constructor() { }

  ngOnInit() {
  }

}