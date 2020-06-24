import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  trigger = false;
  number = 3;
  string = 'hello world';
  object = {name:'john', email:'tt@ntub.edu.tw'};
  array=[];

  constructor() { }

  ngOnInit(): void {
  }

  btnClick(){
    this.string='hello apple';
  }

  btnClick2(){
    this.trigger=true;
  }

  btnClick3(){
    this.number= this.number +3; // + - * / %
    //console.log() : F12
    console.log(this.number + 3);
    console.log(this.number - 3);
    console.log(this.number * 3);
    console.log(this.number / 3);
    console.log(this.number % 3);
  }

  btnClick4(){
    this.object.name= 'mary'; 
  }

  btnClick5(){
    this.array.push('cat'); //0
    this.array.push('dog'); //1
    this.array.push('bird');//2
    console.log(this.array);
    this.array[1]='elephant';
  }
}
