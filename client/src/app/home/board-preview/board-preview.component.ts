import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-preview',
  templateUrl: './board-preview.component.html',
  styleUrls: ['./board-preview.component.css']
})
export class BoardPreviewComponent implements OnInit {

  name = 'Generic board'

  constructor() { }

  ngOnInit(): void {
  }

}
