
import Form from '../../components/Form';
import renderDom from '../../utils/renderDom';

const props = {
  attr: {class: 'form'},
  title: 'Авторизация',
  inputs: [
    {
      name: 'login',
      title: 'Логин',
      type: 'text',
    },
    {
      name: 'password',
      title: 'Пароль',
      type: 'password',
    },
  ],
  buttons: [
    {
      type: 'submit',
      text: 'Войти',
    },
    {
      type: 'button',
      text: 'Ещё не зарегистрированы?',
      link: '/pages/signup/index.html',
    },
  ],
}

const signin = new Form('div', props);

renderDom('.page', signin);
