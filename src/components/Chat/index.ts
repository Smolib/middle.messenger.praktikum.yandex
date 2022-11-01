import tpl from './tpl';
import Component from '../../services/Component';
import './style.scss';

export default class Chat extends Component {
  constructor(props)
  {
    super("div", {attr: {class: 'chat'}, ...props});
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
