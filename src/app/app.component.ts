import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FlexComponent} from "./flex-component/flex.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FlexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IlitiaTuto01-Flexbox';
  protected readonly Array = Array;
}
