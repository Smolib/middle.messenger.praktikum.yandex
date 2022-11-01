
import Form from '../../components/Form';
import renderDom from '../../utils/renderDom';
const profileAvatar = require('../../../static/profileAvatar.jpeg')

const props = {
  attr: {class: 'form'},
  title: 'Настройки профиля',
  avatarLink: profileAvatar,
  inputs: [
    {
      name: 'first_name',
      title: 'Имя',
      type: 'text',
    },
    {
      name: 'second_name',
      title: 'Фамилия',
      type: 'text',
    },
    {
      name: 'display_name',
      title: 'Отображаемое имя',
      type: 'text',
    },
    {
      name: 'login',
      title: 'Логин',
      type: 'text',
    },
    {
      name: 'email',
      title: 'E-mail',
      type: 'email',
    },
    {
      name: 'password',
      title: 'Пароль',
      type: 'password',
    },
    {
      name: 'phone',
      title: 'Телефон',
      type: 'text',
    },
  ],
  buttons: [
    {
      type: 'submit',
      text: 'Сохранить изменения',
    },
    {
      type: 'button',
      text: 'Обновить аватар',
    },
    {
      type: 'button',
      text: 'Обновить пароль',
    },
  ],
}

const signin = new Form('div', props);

renderDom('.page', signin);
