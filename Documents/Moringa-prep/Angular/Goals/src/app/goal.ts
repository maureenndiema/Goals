import { OnInit } from "@angular/core";

export class Goal {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
}
export class GoalComponent implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    export class Goal {
        showDescription: boolean;
        constructor(public id: number,public name: string,public description: string){
          this.showDescription=false;
        }
      }
    goals: Goal[] = [
        {id:1, name:'Watch finding Nemo',description:'to learn'},
        {id:2,name:'Coding Angular',description:'to practice'},
        {id:3,name:'Working in Pairs',description:'to understand better'},
        
      ];
}
