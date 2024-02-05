import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-emulated-encapsulation',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.Emulated,
  styles: [`
    h1 {
      color: #b02020;
    }
  `,
    `
      div{
        width: 100vw;
        margin: 3rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }`,`
      span.highlight {
        background-color: #b02020;
        color: white;
        padding: 0.5rem;
      }
    `],
  template: `
    <div>
      <h1>Emulated Encapsulation</h1>
      <span class="highlight">This is a span with a class of highlight</span>
    </div>
  `
})
export class EmulatedEncapsulation {

}
