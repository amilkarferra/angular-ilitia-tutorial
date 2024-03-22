import {computed, signal, WritableSignal} from "@angular/core";
import {AxisDirection, FlexDirection} from "../models/flex-direction.model";


export const flexContainerDirection: WritableSignal<FlexDirection> = signal('row');


export const axisDirection = computed(() => {
  if (flexContainerDirection() == 'row') {
    return ('horizontal' as AxisDirection);
  } else {
    return ('vertical' as AxisDirection);
  }
});
