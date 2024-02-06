import {Component} from '@angular/core';
import {
  EmulatedEncapsulation
} from "./01-encapsulation/emulated-encapsulation.ts/emulated-encapsulation";
import {NoneEncapsulationComponent} from "./01-encapsulation/none-encapsulation/none-encapsulation.component";
// TODO 02 : (Uncomment the app-none-encapsulation) Add the EmulatedEncapsulationComponent to the component to see the difference
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmulatedEncapsulation, NoneEncapsulationComponent],
  styles: [`
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  `],
  template: `
    <div>
      <app-emulated-encapsulation/>
<!--      <app-none-encapsulation/>-->
    </div>
  `,
})
export class AppComponent {
  title = 'IlitiaTuto01';
}
