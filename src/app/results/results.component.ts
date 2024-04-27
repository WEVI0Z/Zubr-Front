import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { TranslateClass } from '../translate.component'
import { BreadcrumbService } from 'xng-breadcrumb'
import { Router } from '@angular/router'

const COLUMNS_1 = ['Компетенция', 'ФИО', 'Место', 'Область']

const ITEMS_1 = [
  {
    title: 'Программирование 10 класс',
    children: [
      {
        name: 'Шипневский Иван Андреевич',
        place: 1,
        region: 'Гомельская область',
      },
      {
        name: 'Кухарчук Максим Игоревич',
        place: 2,
        region: 'г. Минск',
      },
      {
        name: 'Скосарев Никита Николаевич',
        place: 3,
        region: 'Брестская область',
      },
    ],
  },
  {
    title: 'Bot-конструктор 9 класс',
    children: [
      {
        name: 'Демешко Виктор Викторович',
        place: 1,
        region: 'Брестская область',
      },
      {
        name: 'Шибаев Игорь Сергеевич',
        place: 2,
        region: 'г. Минск',
      },
      {
        name: 'Пучинский Лев Евгеньевич',
        place: 3,
        region: 'Витебская область',
      },
    ],
  },
  {
    title: 'Графический дизайн 8 класс',
    children: [
      {
        name: 'Матвеева Татьяна Денисовна',
        place: 1,
        region: 'г. Минск',
      },
      {
        name: 'Ратомский Владислав Викторович',
        place: 2,
        region: 'Минская область',
      },
      {
        name: 'Лущик Полина Александровна',
        place: 3,
        region: 'Брестская область',
      },
    ],
  },
  {
    title: 'Графический дизайн 10 класс',
    children: [
      {
        name: 'Степанюк Анна Анатольевна',
        place: 1,
        region: 'г. Минск',
      },
      {
        name: 'Сохар Эвелина Сергеевна',
        place: 2,
        region: 'Гомельская область',
      },
      {
        name: 'Гиль-Белевич Анна Олеговна',
        place: 3,
        region: 'Гродненская область',
      },
    ],
  },
  {
    title: 'Прототипирование 8 класс',
    children: [
      {
        name: 'Павловский Антон Андреевич',
        place: 1,
        region: 'Могилевская область',
      },
      {
        name: 'Ежиков Дмитрий Владимирович',
        place: 2,
        region: 'Гомельская область',
      },
      {
        name: 'Харитонович Федор Евгеньевич',
        place: 3,
        region: 'Минская область',
      },
    ],
  },
  {
    title: 'Прототипирование 10 класс',
    children: [
      {
        name: 'Полегин Илья Дмитриевич',
        place: 1,
        region: 'Гомельская область',
      },
      {
        name: 'Филипова Анастасия Дмитриевна',
        place: 2,
        region: 'Брестская область',
      },
      {
        name: 'Кузавков Егор Сергеевич',
        place: 3,
        region: 'Минская область',
      },
    ],
  },
  {
    title: 'Web-дизайн',
    children: [
      {
        name: 'Ткачева Анастасия Леонидовна',
        place: 1,
        region: 'г. Минск',
      },
      {
        name: 'Рожкова Алина Сергеевна',
        place: 2,
        region: 'Гомельская область',
      },
      {
        name: 'Бенденкова София Николаевна',
        place: 3,
        region: 'Могилевская область',
      },
    ],
  },
  {
    title: 'Web-разработка 8 класс',
    children: [
      {
        name: 'Волынец Ян Витальевич',
        place: 1,
        region: 'г. Минск',
      },
      {
        name: 'Карпова Александра Сергеевна',
        place: 2,
        region: 'Витебская область',
      },
      {
        name: 'Волкановский Андрей Александрович',
        place: 3,
        region: 'Гродненская область',
      },
    ],
  },
  {
    title: 'Web-разработка 9 класс',
    children: [
      {
        name: 'Бурдун Ростислав Васильевич',
        place: 1,
        region: 'Гродненская область',
      },
      {
        name: 'Крицкий Максим Александрович',
        place: 2,
        region: 'г. Минск',
      },
      {
        name: 'Чадович Кирилл Сергеевич',
        place: 3,
        region: 'Минская область',
      },
    ],
  },
  {
    title: 'Следование по линии',
    children: [
      {
        name: 'Астапович Всеволод Максимович',
        place: 1,
        region: 'Могилевская область',
      },
      {
        name: 'Алиев Назар Тарланович',
        place: 2,
        region: 'Витебская область',
      },
      {
        name: 'Рапейко Артем Сергеевич',
        place: 3,
        region: 'Гомельская область',
      },
    ],
  },
  {
    title: 'Интеллектуальное сумо 15х15',
    children: [
      {
        name: 'Костенкова Анна Валерьевна',
        place: 1,
        region: 'г. Минск',
      },
      {
        name: 'Болбас Алексей Васильевич',
        place: 2,
        region: 'Могилевская область',
      },
      {
        name: 'Козубенко Давид Сергеевич',
        place: 3,
        region: 'Брестская область',
      },
    ],
  },
  {
    title: 'Футбол управляемых роботов 2х2',
    children: [
      {
        name: 'Писаков Иван Артемович ',
        place: 1,
        region: 'Минская область',
      },
      {
        name: 'Абраменко Дмитрий Вячеславович',
        place: 1,
        region: 'Минская область',
      },
      {
        name: 'Жолудев Павел Петрович',
        place: 2,
        region: 'Гомельская область',
      },
      {
        name: 'Крючков Даниил Андреевич',
        place: 2,
        region: 'Гомельская область',
      },
      {
        name: 'Бабич Роман Русланович',
        place: 3,
        region: 'Брестская область',
      },
      {
        name: 'Герасименко Глеб Александрович',
        place: 3,
        region: 'Брестская область',
      },
    ],
  },
]

const COLUMNS_2 = ['Место', 'Область']

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  private translation: TranslateClass

  columns_1 = COLUMNS_1
  items_1 = ITEMS_1

  constructor(
    public translate: TranslateService,
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {
    this.translation = new TranslateClass(translate)
    this.translation.translateData(this.translation.getLanguage())
  }

  ngOnInit(): void {
    this.translate
      .get('SHARED.HEADER.RESULTS')
      .subscribe((translation: string) => {
        document.title = translation
      })
    this.breadcrumbService.set('@Results', 'RESULTS.BREADCRUMB')
  }
  checkRouteUrl() {
    return this.router.url == '/results'
  }
}
