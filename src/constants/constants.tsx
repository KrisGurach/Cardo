export const ytLink = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=2s';
export const vkLink = '#';
export const tgLink = '#';

export const ProfileFormData = [
  {
    title: 'ФИО',
    inputs: [
      {
        name: 'surname',
        label: 'Фамилия',
        placeholder: 'Фамилия',
      },
      {
        name: 'firstName',
        label: 'Имя',
        placeholder: 'Имя',
      },
      {
        name: 'lastName',
        label: 'Отчество',
        placeholder: 'Отчество',
      }
    ]
  },
  {
    title: 'Личные данные',
    inputs: [
      {
        name: 'gender',
        label: 'Пол',
        placeholder: 'Пол',
      },
      {
        name: 'country',
        label: 'Гражданство',
        placeholder: 'Гражданство',
      },
      {
        name: 'birthday',
        label: 'День рождения',
        placeholder: 'День рождения',
        type: 'date'
      }
    ]
  },
  {
    title: 'Местоположение',
    inputs: [
      {
        name: 'country',
        label: 'Страна',
        placeholder: 'Страна',
      },
      {
        name: 'area',
        label: 'Область',
        placeholder: 'Область',
      },
      {
        name: 'city',
        label: 'Город',
        placeholder: 'Город',
      }
    ]
  },
  {
    title: 'Связь',
    inputs: [
      {
        name: 'phone',
        label: 'Телефон',
        placeholder: 'Телефон',
        type: 'tel'
      },
      {
        name: 'email',
        label: 'Почта',
        placeholder: 'Почта',
        type: 'email'
      },
      {
        name: 'portfolioUrl',
        label: 'Портфолио',
        placeholder: 'Портфолио',
        type: 'url'
      },
      {
        name: 'socialMediaUrl',
        label: 'Соцсети',
        placeholder: 'Соцсети',
        type: 'url'
      }
    ]
  }
]