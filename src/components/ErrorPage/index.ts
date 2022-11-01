import tpl from './tpl';
import Component from '../../services/Component';
import './style.scss';

export default class ErrorPage extends Component {
  render() {
    return this.compile(tpl, this._props);
  }
}
