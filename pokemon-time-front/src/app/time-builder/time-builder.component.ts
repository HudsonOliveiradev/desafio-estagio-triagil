import {Component, OnInit} from '@angular/core';
import {TimeService} from "../services/time.service";

@Component({
  selector: 'app-time-builder',
  standalone: true,
  imports: [],
  templateUrl: './time-builder.component.html',
  styleUrl: './time-builder.component.css'
})
export class TimeBuilderComponent implements OnInit {
  teams: any = [];

  constructor(private timeService: TimeService) {}
    ngOnInit(): void {
        this.getTimes();
    }

  getTimes() {
    this.timeService.getTimes().subscribe(
      (data) => {
            this.teams = data;
    },
      (error) => {
        console.error('Error ao consultar time!', error);
      }
      );
  }
}
