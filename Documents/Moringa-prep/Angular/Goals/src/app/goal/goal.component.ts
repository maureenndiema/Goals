import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  // ngOnInit(): void {
    // throw new Error('Method not implemented.');
  
  //displaying code in Array
  // goal = ['Watching Fining Nemo', 'Coding Angular' , 'working in Pairs'];
  goals: Goal[] =[
    new Goal (1, 'watch finding Nemo')

  // { id: 1, name:'Watching Finding Nemo', description:'to learn ' },
  // { id: 2, name:'Coding Angular', description:'to practice'},
  // { id: 3, name:'working in Pairs', description:'to understand better'}
  
]


  constructor() { 

  }


  ngOnInit(): void {
  }

}
