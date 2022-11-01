import tpl from './tpl';
import Component from '../../services/Component';
import './style.scss';

export default class Form extends Component {
  constructor(props)
  {
    const _props = props
    super("h1", )
  }

  render() {
    return this.compile(tpl, this._props);
  }
}
