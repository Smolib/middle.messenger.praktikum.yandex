
import Form from '../../components/Form';
import renderDom from '../../utils/renderDom';

const props = {
  attr: {class: 'form'},
  title: 'Обновить пароль',
  inputs: [
    {
      name: 'oldPassword',
      title: 'Старый пароль',
      type: 'password',
    },
    {
      name: 'newPassword',
      title: 'Новый пароль',
      type: 'password',
    },
  ],
  buttons: [
    {
      type: 'submit',
      text: 'Сохранить изменения',
    },
    {
      type: 'button',
      text: 'Вернуться к настройкам',
      link: '/pages/profile/index.html',
    },
  ],
}

const signin = new Form('div', props);

renderDom('.page', signin);
