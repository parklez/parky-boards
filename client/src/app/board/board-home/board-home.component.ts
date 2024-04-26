import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-home',
  templateUrl: './board-home.component.html',
  styleUrls: ['./board-home.component.css']
})
export class BoardHomeComponent implements OnInit {

  boardName!: string | null;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // This could be a place to have a hardcoded list of allowed boards and then
    // Redirect the user back. Another obvious place would be at the routing module.
    this.boardName = this.route.snapshot.paramMap.get('board');
  }

}
