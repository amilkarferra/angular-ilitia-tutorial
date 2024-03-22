import {Component} from '@angular/core';
import {flexContainerDirection} from "../signals/flex.signals";
import {FormsModule} from "@angular/forms";
import {RedArrowComponent} from "../red-arrow-component/red-arrow-component.component";

@Component({
  selector: 'app-flex-component',
  standalone: true,
  imports: [
    FormsModule,
    RedArrowComponent
  ],
  templateUrl: './flex.component.html',
  styleUrl: './flex.component.css'
})
export class FlexComponent {
  propertyName = "flex-direction"
  showMainAxis = false;

  useFlexDirectionFromStyleUrl = true;

  array = Array(10).fill(0).map((x, i) => i);

  toggleFlexDirection = (): void => {
    flexContainerDirection.update((prev) => prev === 'row' ? 'column' : 'row')
  }

  getDivCustomWidth(index: number): string {
    const customDivWidthByIndex: Map<number, string> = new Map<number, string>([
      [0, "120px"],
      [1, "90px"],
      [3, '130px'],
      [4, '70px'],
      [5, '160px'],
      [7, '80px'],
      [9, '100px'],
      [10, '180px']
    ])

    return customDivWidthByIndex.has(index) ? customDivWidthByIndex.get(index)?.valueOf()! : customDivWidthByIndex.get(0)?.valueOf()!
  }

  protected readonly flexContainerDirection = flexContainerDirection;
}
