import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkComponent } from '../work/work.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio Angular';
}
