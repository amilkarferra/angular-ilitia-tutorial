import {Component, HostBinding} from '@angular/core';
import {NgClass} from "@angular/common";
import {axisDirection} from "../signals/flex.signals";

@Component({
  selector: 'app-red-arrow',
  templateUrl: './red-arrow-component.component.html',
  styleUrls: ['./red-arrow-component.component.css'],
  standalone: true,
  imports: [
    NgClass
  ]
})
export class RedArrowComponent {



  @HostBinding('style.transform')
  get rotate() {
    return axisDirection() === 'horizontal' ? 'rotate(90deg)' : 'rotate(180deg)';
  }

  @HostBinding('style.top')
  get top() {
    return axisDirection() === 'horizontal' ? '50vh' : 'calc(100px + 50vh)';
  }

  @HostBinding('style.left')
  get left() {
    return axisDirection() === 'horizontal' ? 'calc(100px + 50vw)' : '50vw';
  }

  protected readonly axisDirection = axisDirection;
}
