import tpl from './tpl';
import Component from '../../services/Component';

export default class Nav extends Component {
  render() {
    return this.compile(tpl, {});
  }
}
