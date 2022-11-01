import tpl from './tpl';
import Component from '../../services/Component';
import '../ChatsPage/style.scss';
import registerHelper from '../../utils/registerHelper';
import Message from '../Message'


registerHelper('Message', Message);
export default class Messages extends Component {
  render() {
    console.log('пропсы мессаджес',this._props)
    return this.compile(tpl, this._props);
  }
}
