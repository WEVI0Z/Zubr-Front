import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TrenslateClass } from '../../translate.component';

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
  private currentLang: string ="ru";
  private translation: TrenslateClass;


  constructor(public translate: TranslateService) {
 
    this.translation = new TrenslateClass(translate, this.currentLang)

    this.currentLang = this.translation.getCurrentLanguage().toLowerCase();
  }


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
      this.dayString = this.getDayLang(1)
    } else if (this.daysLeft % 10 >= 2 && this.daysLeft % 10 <= 4) {
      this.dayString = this.getDayLang(2)
    }

    if ((this.daysLeft % 10 >= 5 && this.daysLeft % 10 <= 9) ||
      this.daysLeft === 11 || this.daysLeft === 10 ||this.daysLeft % 10 === 0 ||
      this.daysLeft === 12 || this.daysLeft === 13 || this.daysLeft === 14) {
      this.dayString = this.getDayLang(5);
    }

    if (this.hoursLeft % 10 === 1) {
      this.hourString = this.getHourLang(1)
    } else if (this.hoursLeft % 10 >= 2 && this.hoursLeft % 10 <= 4) {
      this.hourString = this.getHourLang(2);
    }

    if ((this.hoursLeft % 10 >= 5 && this.hoursLeft % 10 <= 9) ||
      this.hoursLeft === 11 || this.hoursLeft === 10 ||this.hoursLeft % 10 === 0 ||
      this.hoursLeft === 12 || this.hoursLeft === 13 || this.hoursLeft === 14) {
      this.hourString = this.getHourLang(5);
    }

    if (this.minutesLeft % 10 === 1) {
      this.minuteString = this.getMinutLang(1);
    } else if (this.minutesLeft % 10 >= 2 && this.minutesLeft % 10 <= 4) {
      this.minuteString = this.getMinutLang(2);
    }

    if ((this.minutesLeft % 10 >= 5 && this.minutesLeft % 10 <= 9) ||
      this.minutesLeft === 11 || this.minutesLeft === 10 ||this.minutesLeft % 10 === 0 ||
      this.minutesLeft === 12 || this.minutesLeft === 13 || this.minutesLeft === 14) {
      this.minuteString = this.getMinutLang(5);
    }

    if (this.secondsLeft % 10 === 1) {
      this.secondString = this.getSecondLang(1);
    } else if (this.secondsLeft % 10 >= 2 && this.secondsLeft % 10 <= 4) {
      this.secondString = this.getSecondLang(2);
    }

    if ((this.secondsLeft % 10 >= 5 && this.secondsLeft % 10 <= 9) ||
      this.secondsLeft === 11 || this.secondsLeft === 10 ||this.secondsLeft % 10 === 0 ||
      this.secondsLeft === 12 || this.secondsLeft === 13 || this.secondsLeft === 14) {
      this.secondString = this.getSecondLang(5);
    }
  }

  //в качестве аргумента могут быть три числа: 1-день, 2-дня, 5-дней
  private getDayLang(number: number): string {
    let dayLang: string;
    if (number == 1) {
      switch (this.currentLang) {
        case 'ru':
          dayLang = 'день';
          break;
        case 'en':
          dayLang = 'day';
          break;
        case 'be':
          dayLang = 'дзень';
          break;
        default:
          dayLang = 'день';
          break;
      }
    }
    else if (number == 2) {
      switch (this.currentLang) {
        case 'ru':
          dayLang = 'дня';
          break;
        case 'en':
          dayLang = 'days';
          break;
        case 'be':
          dayLang = 'днi';
          break;
        default:
          dayLang = 'дня';
          break;
      }
    }
    else {
      switch (this.currentLang) {
        case 'ru':
          dayLang = 'дней';
          break;
        case 'en':
          dayLang = 'days';
          break;
        case 'be':
          dayLang = 'дзён';
          break;
        default:
          dayLang = 'дней';
          break;
      }
    }

    return dayLang;
  }

  //в качестве аргумента могут быть три числа: 1-час, 2-часа, 5-часов
  private getHourLang(number: number): string {
    let hourLang: string;
    if (number == 1) {
      switch (this.currentLang) {
        case 'ru':
          hourLang = 'час';
          break;
        case 'en':
          hourLang = 'hour';
          break;
        case 'be':
          hourLang = 'гадзiна';
          break;
        default:
          hourLang = 'час';
          break;
      }
    }
    else if (number == 2) {
      switch (this.currentLang) {
        case 'ru':
          hourLang = 'часа';
          break;
        case 'en':
          hourLang = 'hours';
          break;
        case 'be':
          hourLang = 'гадзiны';
          break;
        default:
          hourLang = 'часа';
          break;
      }
    }
    else {
      switch (this.currentLang) {
        case 'ru':
          hourLang = 'часов';
          break;
        case 'en':
          hourLang = 'hours';
          break;
        case 'be':
          hourLang = 'гадзiн';
          break;
        default:
          hourLang = 'часов';
          break;
      }
    }

    return hourLang;
  }

  //в качестве аргумента могут быть три числа: 1-минута, 2-минуты, 5-минут
  private getMinutLang(number: number): string {
    let minutLang: string;
    if (number == 1) {
      switch (this.currentLang) {
        case 'ru':
          minutLang = 'минута';
          break;
        case 'en':
          minutLang = 'minute';
          break;
        case 'be':
          minutLang = 'хвiлiна';
          break;
        default:
          minutLang = 'час';
          break;
      }
    }
    else if (number == 2) {
      switch (this.currentLang) {
        case 'ru':
          minutLang = 'минуты';
          break;
        case 'en':
          minutLang = 'minutes';
          break;
        case 'be':
          minutLang = 'хвiлiны';
          break;
        default:
          minutLang = 'часа';
          break;
      }
    }
    else {
      switch (this.currentLang) {
        case 'ru':
          minutLang = 'минут';
          break;
        case 'en':
          minutLang = 'minutes';
          break;
        case 'be':
          minutLang = 'хвiлiн';
          break;
        default:
          minutLang = 'минут';
          break;
      }
    }

    return minutLang;
  }

  //в качестве аргумента могут быть три числа: 1-секунда, 2-секунды, 5-секунд
  private getSecondLang(number: number): string {
    let secondLang: string;
    if (number == 1) {
      switch (this.currentLang) {
        case 'ru':
          secondLang = 'секунда';
          break;
        case 'en':
          secondLang = 'second';
          break;
        case 'be':
          secondLang = 'секунда';
          break;
        default:
          secondLang = 'секунда';
          break;
      }
    }
    else if (number == 2) {
      switch (this.currentLang) {
        case 'ru':
          secondLang = 'секунды';
          break;
        case 'en':
          secondLang = 'seconds';
          break;
        case 'be':
          secondLang = 'секунды';
          break;
        default:
          secondLang = 'секунды';
          break;
      }
    }
    else {
      switch (this.currentLang) {
        case 'ru':
          secondLang = 'секунд';
          break;
        case 'en':
          secondLang = 'seconds';
          break;
        case 'be':
          secondLang = 'секунд';
          break;
        default:
          secondLang = 'секунд';
          break;
      }
    }

    return secondLang;
  }
}
