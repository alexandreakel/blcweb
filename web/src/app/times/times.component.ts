import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {

  times;
  text;
  oldText
  appState = 'default';

  constructor(private TimeService: TimeService) { }

  ngOnInit() {
    this.times = this.TimeService.getTimes();
  }

  addTime() {
    let newTime = {
      text: this.text,
      escudo: this.text.toLowerCase().replace(" ", "-")
    }
    this.times.push(newTime);

    this.TimeService.addTime(newTime);
  }
  
  deleteTime(timeText) {
    for(let i = 0; i < this.times.length; i++) {
      if(this.times[i].text == timeText) {
          this.times.splice(i, 1);
      }
    }

    this.TimeService.deleteTime(timeText);
  }

  editTime(time) {
    this.appState = 'edit';
    this.oldText = time.text;
    this.text = time.text;
  }

  updateTime() {
    console.log(this.text);
        for(let i = 0; i < this.times.length; i++) {
          if(this.times[i].text == this.oldText) {
          this.times[i].text = this.text;
      }
  }

  this.TimeService.updateTime(this.oldText, this.text);

  }

}