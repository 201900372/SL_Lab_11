import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  num = 5;

  public task = [
   {
     "name" : "Workout",
     "id" : 1,
     "details" : "at 5 pm"
   },
   {
     "name" : "Quiz",
     "id" : 2,
     "details" : "At 6:10"
   },
   {
     "name" : "Have Snacks",
     "id" : 3,
     "details" : "At 7 p.m"
   },
   {
     "name" : "Watch a movie",
     "id" : 4,
     "details" : "At 10 p.m"
   },
   {
     "name" : "Sleep",
     "id" : 5,
     "details" : "At 12 a.m"
   }
 ];

 getTasks(){
   return this.task;
 }

 getNumber(){
   return this.num;
 }

  constructor() { }
}
