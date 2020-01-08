import { Injectable } from '@angular/core';
import { Init } from './init-times';

@Injectable()
export class TimeService extends Init {

  constructor() {
    super();
    console.log('TimeService Funcionando!!!');
    this.load();
   }

   getTimes() {
     let times = JSON.parse(localStorage.getItem('times'));
     return times;
   }

   addTime(newTime) {
      let times = JSON.parse(localStorage.getItem('times'));
      // Add New TodoService
      times.push(newTime);
      // Set New Todos
      localStorage.setItem('times', JSON.stringify(times));
   }

   deleteTime(timeText) {
     let times = JSON.parse(localStorage.getItem('times'));

     for(let i = 0; i <times.length; i++) {
      if(times[i].text == timeText) {
         times.splice(i, 1);
      }
   }
      // Set New Todos
      localStorage.setItem('times', JSON.stringify(times));
   }

   updateTime(oldText, newText){  
      let times = JSON.parse(localStorage.getItem('times'));

      for(let i = 0; i <times.length; i++) {
         if(times[i].text == oldText) {
            times[i].text = newText;
         }
      }
      localStorage.setItem('times', JSON.stringify(times));
   }
}