import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent implements OnInit {
  @Output() sendMessages = new EventEmitter();
  @Output() sendArrayOfObject = new EventEmitter();

  messages!: string;
  words: string = 'This messages come from Child component';

  family = [
    { name: 'Mulyono Putra', age: '27', address: 'Sukabumi' },
    { name: 'Annisya', age: '20', address: 'Sukabumi' },
    { name: 'Kevin Kurniawan', age: '18', address: 'DKI Jakarta' },
  ];

  constructor() {}

  ngOnInit() {}

  sendMessagesToParent() {
    this.sendMessages.emit(this.words);
  }

  sendArrayOfObjectToParent(){
    this.sendArrayOfObject.emit(this.family);
  }
}
