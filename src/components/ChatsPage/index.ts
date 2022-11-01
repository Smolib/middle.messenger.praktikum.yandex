import tpl from './tpl';
import Component from '../../services/Component';
import './style.scss';
import Chats from '../Chats';
import Messages from '../Messages';

export default class ChatsPage extends Component {
  constructor(tag, props)  {

    const messages = new Messages('div', {attr: {class: 'chats__messages-wrapper'},messages: props.messages});

    const onChatClicked = (chat) =>
    {
      console.log("chat clicked", chat.title)
      messages.setProps({messages: chat.messages});
    }

    const chats = new Chats('div', {attr: {class: 'chats__chats-wrapper'}, chats: props.chats, onClicked: onChatClicked});

    super('main',
      {
        attr: {class: 'chats'},
        chats: chats,
        messages: messages
      }
    )
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
