import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit {
  @Input() category: string = '';
  @Input() id: number = 0;
  @Output() selectCategoryEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.category);
  }

  selectCategory() {
    this.selectCategoryEvent.emit(this.category);
  }
}
