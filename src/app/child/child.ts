import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [JsonPipe, FormsModule],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  @Input() data: string = '';
  @Output() dataChange = new EventEmitter<string>();
  newVal: string = 'abc';
  ngOnInit() {
    console.log('Child received data:', this.data);
  }
  updateData() {
    console.log('Updating data in child:', this.newVal);
    this.dataChange.emit(this.newVal);
  }
}
