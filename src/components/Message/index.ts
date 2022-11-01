import tpl from './tpl';
import Component from '../../services/Component';
import './style.scss';

export default class Message extends Component {
  constructor(props)
  {
    super("div", {attr: {class: 'message'}, ...props});
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
