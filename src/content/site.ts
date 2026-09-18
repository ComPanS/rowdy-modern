export type Service = { title: string; price: string; note?: string }

export const site = {
  name: 'Rowdy',
  shortName: 'ROWDY',
  tagline: 'Стиль начинается здесь',
  description: 'Барбершоп в Немецкой Деревне. Стрижём, оформляем и настраиваем настроение.',
  phone: '+7 (913) 682-82-02',
  address: 'Краснодар, Баварская улица, 8',
  mapUrl: 'https://yandex.ru/maps/org/196568489326',
  routeUrl: 'https://yandex.ru/maps?ll=38.92857483680535%2C45.11952370708726&mode=routes&rtext=~45.11952370708726%2C38.92857483680535&z=17',
  telegramUrl: 'https://telegram.me/+79136828202',
  whatsappUrl: 'https://wa.me/+79136828202',
  logo: '/media/logo.jpg',
  heroImage: '/media/interior.jpg',
}

export const services: Service[] = [
  { title: 'Мужская стрижка', price: '1 500 ₽' },
  { title: 'Детская стрижка до 12 лет', price: '1 300 ₽' },
  { title: 'Моделирование бороды', price: '1 200 ₽' },
  { title: 'Тонировка бороды / головы', price: '1 200 ₽' },
  { title: 'Королевское бритьё лица / головы', price: '1 200 ₽' },
  { title: 'Стрижка бороды и усов', price: '800 ₽' },
  { title: 'Комплексный уход для лица', price: '800 ₽' },
  { title: 'Воск', price: '300 ₽' },
  { title: 'Охлаждающие патчи', price: '200 ₽' },
]

export const reviews = [
  { author: 'Mark', date: '5 августа', text: 'Айман не просто подстриг, а показал варианты и объяснил, что лучше подойдёт с учётом формы лица и структуры волос.' },
  { author: 'Эрнест Кадиров', date: '2 августа', text: 'Чистота, красивый интерьер и мастер Вячеслав, который сразу понял, как стричь. Однозначно рекомендую.' },
  { author: 'valeriass', date: '13 июня', text: 'Привела папу в Rowdy. Атмосфера стильная, спокойная и комфортная, а результат получился аккуратным.' },
]
