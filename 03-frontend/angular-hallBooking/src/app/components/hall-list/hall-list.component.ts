import { Hall } from './../../common/hall';
import { HallService } from './../../services/hall.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hall-list',
  templateUrl: './hall-grid.component.html',
  //templateUrl: './hall-list.component.html',
  styleUrls: ['./hall-list.component.css']
})
export class HallListComponent implements OnInit {

  halls: Hall[];

  constructor(private hallService: HallService) { }

  ngOnInit(): void {
    this.listHalls();
  }

  listHalls() {
    this.hallService.getHallList().subscribe(
      data => {
        this.halls = data;
      }
    )
  }

}
