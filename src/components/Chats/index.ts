import tpl from './tpl';
import Component from '../../services/Component';
import '../ChatsPage/style.scss';
import registerHelper from '../../utils/registerHelper';
import Chat from '../Chat'


registerHelper('Chat', Chat);
// Handlebars.registerHelper('Chat', ({ hash, data }) =>
// {

//   const children = data.root.dynamicChildren;
//   const component = new Chat(hash.data);

//   children[component.id] = component;

//   return `<div data-id="${component.id}"></div>`;
// });

export default class Chats extends Component {
  render() {

    const props = {...this._props, parent: this};

    props.chats = props.chats.map((chat) => {
      return {...chat, onClicked: ()=> {this.onChatClicked(chat) } }
    })

    return this.compile(tpl, props);
  }

  onChatClicked(chat)
  {
    console.log("clickeD:", chat);
  }
}
