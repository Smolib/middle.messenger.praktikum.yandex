import ChatsPage from '../../components/ChatsPage';
import renderDom from '../../utils/renderDom';
const messageAvatar = require('../../../static/messageAvatar.jpg');
const chatAvatar = require('../../../static/chatAvatar.jpg');


const props = {
  messages: [
    {
      avatar: messageAvatar,
      name: 'Имя злостного оппонента',
      text: 'Большой текст. Большущий. Большенный. Большой текст. Большущий. Большенный. Большой текст. Большущий. Большенный. Большой текст. Большущий. Большенный.'
    },
    {
      text: 'Мой ответ',
      isMyMessage: true,
    },
    {
      avatar: messageAvatar,
      name: 'Имя злостного оппонента',
      text: 'Большой текст. Большущий. Большенный. Большой текст. Большущий. Большенный. Большой текст. Большущий. Большенный. Большой текст. Большущий. Большенный.'
    },
    {
      avatar: messageAvatar,
      name: 'Имя злостного оппонента',
      text: 'Большой текст. Большущий. Большенный. Большой текст. Большущий. Большенный. Большой текст. Большущий. Большенный. Большой текст. Большущий. Большенный.'
    },
    {
      text: 'Мой ответ',
      isMyMessage: true,
    },
  ],
  chats: [
    {
      title: 'Первый чат',
      avatar: chatAvatar,
      lastMessage: 'Тут последнее важное сообщение, максимально длинное, очень длинное. Длиннющее. Ох какое длинное. Всю землю обернуть можно.',
      time: '12:00',
      numberNewMessage: 21
    },
    {
      title: 'Второй чат',
      avatar: chatAvatar,
      lastMessage: 'А тут короткое сообщение',
      time: '3:00',
    },
  ],
}

const chatsPage = new ChatsPage('div', props);

renderDom('.page', chatsPage);
