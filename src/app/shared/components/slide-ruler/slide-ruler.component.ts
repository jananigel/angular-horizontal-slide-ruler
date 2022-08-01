import { Component, Input } from '@angular/core';
import { Direction } from '../../../core/enums/direction.enum';

@Component({
  selector: 'app-slide-ruler',
  templateUrl: './slide-ruler.component.html',
  styleUrls: ['./slide-ruler.component.scss'],
})
export class SlideRulerComponent {
  readonly directionEnum = Direction;

  @Input() options = {
    canvasWidth: document.body.clientWidth || 375,
    canvasHeight: 400,
    boxColor: '#E4E4E4',
    scrollLeft: 0,
    heightDecimal: 35,
    heightDigit: 18,
    lineWidth: 2,
    colorDecimal: '#E4E4E4',
    colorDigit: '#E4E4E4',
    divide: 10,
    precision: 1,
    fontSize: 20,
    fontColor: '#666',
    fontMarginTop: 35,
    maxValue: 230,
    minValue: 100,
    currentValue: 160,
    el: null,
    direction: Direction.Vertical, //'vertical', // 'horizontal'
  };

  constructor() {}

  onMinusClick() {}

  onPlusClick() {}
}
