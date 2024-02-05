import {Component} from '@angular/core';
import {
  EmulatedEncapsulation
} from "./01-encapsulation/emulated-encapsulation.ts/emulated-encapsulation";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmulatedEncapsulation],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IlitiaTuto01';
}
