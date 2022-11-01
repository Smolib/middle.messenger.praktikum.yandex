
import Form from '../../components/Form';
import renderDom from '../../utils/renderDom';

const props = {
  attr: {class: 'form'},
  title: 'Регистрация',
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
      text: 'Зарегистрироваться',
    },
    {
      type: 'button',
      text: 'Уже есть аккаунт?',
      link: '/pages/signin/index.html',
    },
  ],
}

const signup = new Form('div', props);

renderDom('.page', signup);
