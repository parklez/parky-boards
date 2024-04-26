import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-preview',
  templateUrl: './board-preview.component.html',
  styleUrls: ['./board-preview.component.css']
})
export class BoardPreviewComponent implements OnInit {

  @Input() name!: string;
  @Input() api!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
