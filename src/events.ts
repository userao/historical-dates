import { IEvent } from "./types/data";
import _ from 'lodash';

const getId = (): number => {
  const id = _.uniqueId()
  return Number(id);
}

const events: IEvent[] = [
  {
    id: getId(),
    year: 1990,
    description: '«Обладать» — роман Антонии Сьюзен Байетт.',
    category: 'literature',
  },
  {
    id: getId(),
    year: 1992,
    description: 'Учреждена премия Браги, первым лауреатом стал Карстен Альнес за роман «Trollbyen».',
    category: 'literature',
  },
  {
    id: getId(),
    year: 1995,
    description: '«Река, выходящая из Эдема» (англ. The River out of Eden) — книга английского этолога, эволюционного биолога Ричарда Докинза.',
    category: 'literature',
  },
  {
    id: getId(),
    year: 1997,
    description: 'Пулитцеровская премия в категории поэзия— Лисел Мюллер, Alive Together: New and Selected Poems',
    category: 'literature',
  },
  {
    id: getId(),
    year: 1999,
    description: 'К 120-летнему юбилею П. П. Бажова учреждена премия его имени.',
    category: 'literature',
  },
  {
    id: getId(),
    year: 1996,
    description: 'Клонирована овечка долли',
    category: 'science',
  },
  {
    id: getId(),
    year: 1997,
    description: 'Комета Хейла-Боппа впервые за 4300 лет пролетает мимо Солнца и приводит к самоубийствам у Небесных Врат.',
    category: 'science',
  },
  {
    id: getId(),
    year: 2002,
    description: ' Перельман опубликовал первую из серии электронных публикаций в arXiv, в которой он доказал гипотезу Пуанкаре.',
    category: 'science',
  },
  {
    id: getId(),
    year: 2007,
    description: 'Ученые обнаружили водяной лед на Луне.',
    category: 'science',
  },
  {
    id: getId(),
    year: 2016,
    description: 'Ученые Массачусетского технологического института создали первый пятиатомный квантовый компьютер.',
    category: 'science',
  },
  {
    id: getId(),
    year: 1985,
    description: '«Назад в будущее»/Back To The Future, США, (реж. Роберт Земекис)',
    category: 'cinematography',
  },
  {
    id: getId(),
    year: 1987,
    description: '«Доспехи бога»/Long xiong hu di / The Armour Of God, Гонконг (реж. Джеки Чан)',
    category: 'cinematography',
  },
  {
    id: getId(),
    year: 1989,
    description: '«Назад в будущее 2»/Back To The Future 2, США (реж. Роберт Земекис)',
    category: 'cinematography',
  },
  {
    id: getId(),
    year: 1990,
    description: '«Назад в будущее 3»/Back To The Future, США, (реж. Роберт Земекис)',
    category: 'cinematography',
  },
  {
    id: getId(),
    year: 1994,
    description: '«Криминальное чтиво»/Pulp Fiction, США, (реж. Квентин Тарантино)',
    category: 'cinematography',
  },
  {
    id: getId(),
    year: 2010,
    description: 'Формула-1: Себастьян Феттель победитель Гран-при (Red Bull Racing)',
    category: 'sports',
  },
  {
    id: getId(),
    year: 2012,
    description: 'Бразильская команда «Коринтианс» выиграла клубный чемпионат мира по футболу, одержав победу над лондонским «Челси»',
    category: 'sports',
  },
  {
    id: getId(),
    year: 2014,
    description: 'Клуб «Сан-Антонио Спёрс» стал пятикратным чемпионом НБА',
    category: 'sports',
  },
  {
    id: getId(),
    year: 2017,
    description: 'Немка Лаура Дальмайер первой в истории биатлона выиграла пять золотых медалей на одном чемпионате мира',
    category: 'sports',
  },
  {
    id: getId(),
    year: 2020,
    description: 'Не состоялся чемпионат мира по фигурному катанию',
    category: 'sports',
  },
]

const getEvents = (): IEvent[] => [...events];

export default getEvents;
