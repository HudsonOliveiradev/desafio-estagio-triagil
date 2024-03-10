import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TimeBuilderComponent} from "./time-builder/time-builder.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TimeBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon-time-front';
}
