import {Component, OnInit} from '@angular/core';

const TARGET_DATE: Date = new Date(2024, 3, 8, 23, 59, 59);

const SECONDS_MULTIPLIER: number = 1000;
const MINUTES_MULTIPLIER: number = SECONDS_MULTIPLIER * 60;
const HOURS_MULTIPLIER: number = MINUTES_MULTIPLIER * 60;
const DAYS_MULTIPLIER: number = HOURS_MULTIPLIER * 24;


//TODO проверка на дополнительный ноль; динамика
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit{
  protected daysLeft: number = 0;
  protected hoursLeft: number = 0;
  protected minutesLeft: number = 0;
  protected secondsLeft: number = 0;
  protected dayString: string = '';
  protected hourString: string = '';
  protected minuteString: string = '';
  protected secondString: string = '';
  protected milliseconds: number = 0;
  protected ifTimerRelevant: boolean = new Date() < TARGET_DATE;

  ngOnInit(): void {
    this.setTime(this.calculateDifference(new Date(), TARGET_DATE));

    setInterval(() => {
      this.milliseconds -= 1000;
      this.setTime(this.milliseconds);
    }, 1000);
  }

  private calculateDifference(beginDate: Date, endDate: Date): number {
    this.milliseconds = endDate.getTime() - beginDate.getTime();
    return this.milliseconds
  }

  private setTime(milliseconds: number): void {
    let result: string[] = [];

    this.daysLeft = Math.floor(milliseconds / DAYS_MULTIPLIER);
    this.hoursLeft = Math.floor(milliseconds / HOURS_MULTIPLIER) - this.daysLeft * 24;
    this.minutesLeft = Math.floor(milliseconds / MINUTES_MULTIPLIER) - this.daysLeft * 24 * 60 - this.hoursLeft * 60;
    this.secondsLeft = Math.floor(milliseconds / SECONDS_MULTIPLIER) - this.daysLeft * 24 * 60 * 60
      - this.hoursLeft * 60 * 60 - this.minutesLeft * 60;

    if (this.daysLeft % 10 === 1) {
      this.dayString = "день"
    } else if (this.daysLeft % 10 >= 2 && this.daysLeft % 10 <= 4) {
      this.dayString = "дня"
    }

    if ((this.daysLeft % 10 >= 5 && this.daysLeft % 10 <= 9) ||
      this.daysLeft === 11 || this.daysLeft === 10 ||this.daysLeft % 10 === 0 ||
      this.daysLeft === 12 || this.daysLeft === 13 || this.daysLeft === 14) {
      this.dayString = "дней";
    }

    if (this.hoursLeft % 10 === 1) {
      this.hourString = "час"
    } else if (this.hoursLeft % 10 >= 2 && this.hoursLeft % 10 <= 4) {
      this.hourString = "часа"
    }

    if ((this.hoursLeft % 10 >= 5 && this.hoursLeft % 10 <= 9) ||
      this.hoursLeft === 11 || this.hoursLeft === 10 ||this.hoursLeft === 0 ||
      this.hoursLeft === 12 || this.hoursLeft === 13 || this.hoursLeft === 14) {
      this.hourString = "часов";
    }

    if (this.minutesLeft % 10 === 1) {
      this.minuteString = "минута"
    } else if (this.minutesLeft % 10 >= 2 && this.minutesLeft % 10 <= 4) {
      this.minuteString = "минуты"
    }

    if ((this.minutesLeft % 10 >= 5 && this.minutesLeft % 10 <= 9) ||
      this.minutesLeft === 11 || this.minutesLeft === 10 ||this.minutesLeft === 0 ||
      this.minutesLeft === 12 || this.minutesLeft === 13 || this.minutesLeft === 14) {
      this.minuteString = "минут";
    }

    if (this.secondsLeft % 10 === 1) {
      this.secondString = "секунда"
    } else if (this.secondsLeft % 10 >= 2 && this.secondsLeft % 10 <= 4) {
      this.secondString = "секунды"
    }

    if ((this.secondsLeft % 10 >= 5 && this.secondsLeft % 10 <= 9) ||
      this.secondsLeft === 11 || this.secondsLeft === 10 ||this.secondsLeft === 0 ||
      this.secondsLeft === 12 || this.secondsLeft === 13 || this.secondsLeft === 14) {
      this.secondString = "секунд";
    }
  }
}
