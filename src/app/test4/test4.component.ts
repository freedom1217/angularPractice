import { Component, OnInit } from '@angular/core';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {

  fruitArry = ['apple', 'banana', 'watermelon', 'lemon'];
  fruitTableArray = [
    { name: 'apple', price: 300 },
    { name: 'banana', price: 20 },
    { name: 'watermelon', price: 100 },
    { name: 'lemon', price: 50 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addFruit() {
    this.fruitArry.push('pipeapple');
  }

  changeFruit() {
    this.fruitArry[0] = 'Dragon fruit';
  }

  addTableFruit() {
    this.fruitTableArray.push(
      { name: 'pineapple', price: 15 },
    );
  }

  changeTableFruit() {
    this.fruitTableArray[0] = { name: 'pineapple', price: 2000 };
  }

}
